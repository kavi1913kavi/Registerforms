import { useState } from 'react';
import './App.css';

function App() {
  const [value, setvalue] = useState({
    name:"",
    email:"",
    mobileNo:"",
    country:"",
    city:"",
    state:"",
    message:""
  })
  const[error,setError]=useState("")

  const handleChange=(e)=>{
    setvalue({...value,[e.target.name]:e.target.value})
    setError({...error,[e.target.name]:""});
  }


  const handleRegister=(e)=>{
    e.preventDefault();
    var errorobject={name:"",email:""}
  
    if(!value.name){
      errorobject.name="Name is required"
    }
    else{
      setError({...error,"name":""});
    }
    
    if(!value.email){
      errorobject.email="Email is required "
    }
    else{
      setError({...error,"email":""});
    }
  
    if(!value.name &&  !value.email){
      setError(errorobject);
      return false
    }else{
      alert("Registration Successfully")
      return true
    }
  }
  return (
    <div className="App">
     
     <section className="contact-from pt-4">
<div className="container">
                
                <div className="row mt-5">
                    <div className="col-md-7 mx-auto">
                      <div className="form-wrapper">
                        <div className="row">
                          <div className="col-md-12">
                            <h4>Registration form</h4>
                          </div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Name" 
                                        name='name' 
                                        value={value.name} 
                                        onChange={handleChange}>
                                        </input>
                                        {error&&error?.name&&(
                                    <small 
                                    className="mb-3 text-normal text-danger">{error.name}</small>
                                     )}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        name='email' 
                                        value={value.email} 
                                        onChange={handleChange}>
                                        </input>
                                        {error&&error?.email&&(
                                  <small 
                                  className="mb-3 text-normal text-danger">{error.email}</small>
                                    )}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control"
                                         placeholder="MobileNo" 
                                         name='mobileNo' 
                                         value={value.mobileNo} 
                                         onChange={handleChange}>
                                         </input>
                                    </div>
                                </div>
                              
                              <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Country" 
                                        name='country' 
                                        value={value.country} 
                                        onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="City" 
                                        name='city' 
                                        value={value.city} 
                                        onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>
                              
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="State" 
                                        name='state' 
                                        value={value.state} 
                                        onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Message" 
                                        name='message' 
                                        value={value.message} 
                                        onChange={handleChange}>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                              <div className="mt-3">
                                 <button 
                                 className="btn btn-primary" 
                                 onClick={handleRegister}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  
  </div>
  </section>
    </div>
  );
}

export default App;
