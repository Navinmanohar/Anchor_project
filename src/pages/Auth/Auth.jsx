import React, { useState } from "react";
import logo from "../../img/logo.png"
import "./Auth.css"
import { useDispatch, useSelector } from "react-redux";
import { login ,signup} from "../../action/action";
import { useNavigate } from "react-router-dom";





const Auth = () => {
  const intitialState={username:"",password:"",conformPass:"",firstname:"",lastname:""}
  const [isSignup, setIsSignup] = useState(false);
   const [data,setData]=useState(intitialState)
   const dispatch=useDispatch()
   const loading=useSelector((state)=>state.authReducer.loading);
   const navigate=useNavigate()
         console.log(loading)



      const handleChange=(e)=>{
        setData((prev)=>({...prev,
        [e.target.name]:e.target.value
        }))
      }
 
      

      const [conformPass,setConformPass]=useState(true);


      const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignup)
        {
          data.password===data.conformPass?dispatch(signup(data,navigate)):setConformPass(false)
            
        }
        else
        dispatch(login(data,navigate))
      }
      const resetForm=()=>{
        setData(intitialState);
        setConformPass(conformPass)

      }
  return <>
    <div className="Auth">
      <div className="a-left">
        <img src={logo} alt="" />
        <div className="webname">
          <h1>Social media</h1>
          <h6>Explore the idea through the world</h6>
        </div>
      </div>
      {/* right side */}

      <div className="a-right">
        <form  className="infoForm AuthForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Register" : "Login"}</h3>

          {/* check sign up login condition */}
          {

            isSignup &&

            <div >
              <input type="text" placeholder="First nmae"
                className="infoInput" name="firstname" value={data.firstname} onChange={handleChange} />

              <input type="text" placeholder="Last name"
                className="infoInput" name="lastname" value={data.lastname}  onChange={handleChange} />
            </div>
          }
          <div >
            <input type="text" className="infoInput" name="username" placeholder="Username" value={data.username}   onChange={handleChange} />
          </div>

          <div>
            <input type="password" className="infoInput" name="password" placeholder="Password" value={data.password}   onChange={handleChange} />
            {
              isSignup && <input type="password" className="infoInput" name="conformPass" placeholder="conformPassword" value={data.conformPass}   onChange={handleChange}/>
            }

          </div>
            { 
            isSignup&&
            <span style={{display:conformPass?"none":"block",color:"red",fontSize:"12px",alignSelf:"flex-end",marginRight:"5px"}}>
              conform password is not same
            </span>
            }
          <div>
            <span style={{ fontSize: "12px", cursor: "pointer" }} onClick={() => { setIsSignup(prev => !prev);resetForm()}}>{isSignup ? "Already have an account. Login!" : "Don't have an account Signup!"} </span>
          </div>

          <button className="button infoButton" type="submit" disabled={loading}>{loading?"loding...":isSignup ? "Sign up" : "Login"}</button>


        </form>
      </div>

    </div>
  </>
}
export default Auth;