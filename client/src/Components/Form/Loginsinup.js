// import React, { useState } from 'react'
// import './Loginsignup.css'

// export const Loginsinup = () => {
//     const [action,setAction]=useState("Sign up");
//     let [name, setName] = useState("")

//     function login(){

//         let userData = {
//             name: name
//         }

//         fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body:JSON.stringify(userData)
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//         setAction("Log in")
//     }

//     return (
//         <div className='container'>

//         <div className='inputs'>
//             {action==="Log in"?<div></div>:<div className='input'>
//                 <input type='text' placeholder='Name' onChange={(e)=> setName(e.target.value)}/>
//             </div>}
//             <div className='input'>
//                 <input type='Email' placeholder='Email'/>
//             </div>
//             <div className='input'>
//                 <input type='Password' placeholder='Password'/>
//             </div>
//             {action==="Log in"?<div></div>: <div className='input'>
//                 <input type='password' placeholder='Confirm Password'/>
//             </div> }

//         </div>
//         {action==="Sign up"? <div></div>: <div className='forgot-pswrd'>
//         <span> Forgot password ?</span>
//         </div> }

//         <div className='submit-container'>
//             <button className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("sign up")}}>Sign up</button>
//             <button className={action==="Sign up"?"submit gray":"submit"}onClick={()=>login()}>Log in</button>
//             </div>
//         </div>
//     )
// }

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginsinup = () => {
    const [mydetails, setMydetails]=useState()
    const navigate=useNavigate()

    const [isform, setForm]=useState()
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        loginData
      );
      console.log("Login successful:", response.data);
      const userid = response?.data.user._id;
      console.log(userid)
      if(userid){
        localStorage.setItem('userid',userid)
        navigate('/')
      }
    } catch (error) {
      setLoginError(error.response.data.message);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signup",
        signupData
      );
      const userid = response.data.user._id;
      console.log(userid)
      if(userid){
        localStorage.setItem('userid',userid)
        navigate('/')
      }

    } catch (error) {
      setSignupError(error.response.data.message);
    }
  };

  return (
    <div className="container">
        <button type="submit"  onClick={()=>{ setForm(!isform)}} className="btn btn-primary">
              { isform?("Signup"):("Login")}
            </button>
      <div className="row">
       {
        isform?(
            <div className="col-md-6">
          <h2>Login</h2>
          <form onSubmit={()=>handleLoginSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            {loginError && <p className="text-danger">{loginError}</p>}
          </form>
        </div>
        ):(
            <div className="col-md-6">
          <h2>Signup</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={signupData.name}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            
            {signupError && <p className="text-danger">{signupError}</p>}
          </form>
        </div>
        )

       } 
        
      </div>
    </div>
  );
};

export default Loginsinup;
