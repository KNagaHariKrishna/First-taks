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
  const [error, seterror] = useState(true)

  const handleRegisteruser=()=>{
    if (username.length > 2 && age.length < 3 && mobnum.length >= 10 && password >= 6) {
      const formData = new FormData()
      formData.append("username", username)
      formData.append("age", age)
      formData.append("mobnum", mobnum)
      formData.append("password", password)

      // console.log(localStorage.getItem('jwt'));
      // let tok = localStorage.getItem("token")

      fetch("http://localhost:5000/register", {
        method: 'POST',
        body: new URLSearchParams(formData).toString(),
        headers: {
          // "Authorization": tok,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },)
    }else{
      seterror(false)
      navigate("/")
    }
  }
  return (
    <div className='container'>
      <label htmlFor="name">UserName</label>
      <input type="text" name="" id="name" onChange={(e) => setUsername(e.target.value)} value={username} />
      <label htmlFor="age">Age</label>
      <input type="number" name="" id="age" onChange={(e) => setAge(e.target.value)} value={age}/>
      <label htmlFor="mobnum">MobNum</label>
      <input type="number" name="" id="mobnum" onChange={(e) => setMobum(e.target.value)} value={mobnum}/>
      <label htmlFor="password">password</label>
      <input type="text" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to={error?"/":"/Login"}>
      <button className='regbtn' onClick={handleRegisteruser}>Register</button>
      </Link>
      <Outlet/>
    </div>
  )
  }

export default Regiser