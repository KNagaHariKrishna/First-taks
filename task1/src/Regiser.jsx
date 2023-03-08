import React from 'react'
import { useState } from 'react'
// import axios from 'axios';
import { Link, Outlet } from "react-router-dom";
import "./register.css"
import { useNavigate } from "react-router-dom";

function Regiser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [age, setAge] = useState("")
  const [mobnum, setMobum] = useState("")
  const [password, setPassword] = useState("")
  const [cpass , setCpass]=useState("")

  const [error, seterror] = useState(false)
  const [uname, setUnameerr]=useState(false)
  const [errage,setAgeErr]=useState(false)
  const [errMob,setMoberr]=useState(false)
  const [errPass,setPasErr]=useState(false)
  const [errrpass,setErrrpass]=useState(false)

  const handleRegisteruser = async (e) => {
    e.preventDefault()
    if (mobnum.length < 10 && !isNaN(mobnum)) {
      setMoberr(true)
    }
    if (username.length < 3){
      setUnameerr(true)
    }
    if (age.length < 3 && !isNaN(age)) {
      setAgeErr(true)
    }
    if(password.length<5){
      setPasErr(true)
    }
    if(password!=cpass){
     return  setErrrpass(true)
    }else{

    }
    

    if (username.length > 2 && age.length < 3 && mobnum.length >= 10 && password.length >= 6 && !isNaN(age) && !isNaN(mobnum) && password === cpass) {
      const formData = new FormData()
      formData.append("username", username)
      formData.append("age", age)
      formData.append("mobnum", mobnum)
      formData.append("password", password)

      // console.log(localStorage.getItem('jwt'));
      // let tok = localStorage.getItem("token")

      const resp = await fetch("http://localhost:5000/register", {
        method: 'POST',
        body: new URLSearchParams(formData).toString(),
        headers: {
          // "Authorization": tok,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },)
      const data = await resp.json()
      // console.log("Failed");
      // console.log(data.status);
      // console.log(data.status == "Failed");
      if (data.status != "Failed") {
        navigate("/Login")
      } else {
        navigate("/")
        seterror(true)
      }
    } else {
      seterror(true)
      navigate("/")
    }
  }
  return (
    <div className='body1'>
      <div className='container'>
        <h1>Registration Form</h1>
        <label htmlFor="name">UserName</label>
        <input type="text" name="" id="name" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="UserName Should Unique" required />
        {uname ? <div style={{ color: "red", marginTop: 10 }}>UserName Should Not be empty and Should be Unique! </div> : null}
        <label htmlFor="age">Age</label>
        <input type="text" name="" id="age" onChange={(e) => setAge(e.target.value)} value={age} placeholder="Please Enter Your Age" required />
        {errage ? <div style={{ color: "red", marginTop: 10 }}>Age should Not Empty and lessthan 100 </div> : null}
        <label htmlFor="mobnum">MobNum</label>
        <input type="text" name="" id="mobnum" onChange={(e) => setMobum(e.target.value)} value={mobnum} placeholder="Please Enter Your Mobile NUmber" required />

        {errMob ? <div style={{ color: "red", marginTop: 10 }}>Mobile Number Should be valid</div> : null}

        <label htmlFor="password">Password</label>
        <input type="text" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please Enter Password" required />
        {errPass ? <div style={{ color: "red", marginTop: 10 }}>Password should have minimum length of 6</div> : null}
        <label htmlFor="password">Re Entere Password</label>
        {errrpass ? <div style={{ color: "red", marginTop: 10 }}>Password and confirm Password doesn't match</div> : null}
        <input type="text" name="" id="password" value={cpass} onChange={(e) => setCpass(e.target.value)} placeholder="Please Enter Password" required />
        <button className='regbtn' onClick={handleRegisteruser}>Register</button>
        {
          error ? <div style={{ color: "red", marginTop: 10 }}>"Pls Provide Valid Details"</div> : null
        }
        <br />
        Have an account? <a href="/Login">Log in</a>
      </div>
    </div>
  )
}

export default Regiser