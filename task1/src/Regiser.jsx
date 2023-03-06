import React from 'react'
import { useState } from 'react'
// import axios from 'axios';
import { Link, Outlet } from "react-router-dom";
import "./register.css"
import { useNavigate } from "react-router-dom";

function Regiser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [age,setAge]=useState("")
  const [mobnum,setMobum]=useState("")
  const [password,setPassword]=useState("")
  const [error, seterror] = useState(false)

  const handleRegisteruser= async ()=>{
    if (username.length > 2 && age.length < 3 && mobnum.length >= 10 && password.length >= 6 && !isNaN(age) && !isNaN(mobnum)) {
      const formData = new FormData()
      formData.append("username", username)
      formData.append("age", age)
      formData.append("mobnum", mobnum)
      formData.append("password", password)

      // console.log(localStorage.getItem('jwt'));
      // let tok = localStorage.getItem("token")

      const resp= await fetch("http://localhost:5000/register", {
        method: 'POST',
        body: new URLSearchParams(formData).toString(),
        headers: {
          // "Authorization": tok,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },)
      const data= await resp.json()
      // console.log("Failed");
      // console.log(data.status);
      // console.log(data.status == "Failed");
      if (data.status != "Failed"){
        navigate("/Login")
      }else{
        navigate("/") 
        seterror(true)
      }
    }else{
      seterror(true)
      navigate("/")
    }
  }
  return (
    <div className='body1'>
    <div className='container'>
        <h1>Registration Form</h1>
      <label htmlFor="name">UserName</label>
      <input type="text" name="" id="name" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="UserName Should Unique" required/>
      <label htmlFor="age">Age</label>
        <input type="text" name="" id="age" onChange={(e) => setAge(e.target.value)} value={age} placeholder="Please Enter Your Age" required />
      <label htmlFor="mobnum">MobNum</label>
        <input type="text" name="" id="mobnum" onChange={(e) => setMobum(e.target.value)} value={mobnum} placeholder="Please Enter Your Mobile NUmber" required />
      <label htmlFor="password">Password</label>
        <input type="text" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please Enter Password" required />
      <button className='regbtn' onClick={handleRegisteruser}>Register</button>
      {
          error ?<div style={{ color: "red" ,marginTop:10}}>"Pls Provide Valid Details"</div>:null
      }
      <br />
        Have an account? <a href="/Login">Log in</a>
    </div>
    </div>
  )
  }

export default Regiser