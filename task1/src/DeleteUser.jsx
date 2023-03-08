import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function DeleteUser() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUserData] = useState(JSON.parse(location.state));
    console.log(user);
    const handleDelete=async ()=>{
      let tok = localStorage.getItem("jwt")
      const resp = await fetch(`http://localhost:5000/deluser?username=${user}`,{
            method: 'DELETE',
        headers: {
          "Authorization": tok,
          "Content-Type": "application/json",
          Accept: "application/json",
        }
        })
        const data = await resp.json()
        console.log(data);
        if(data){
            navigate("/GetAllusers")
        }
    }
  return (
    <center>
    <h1>You Are Deleting UserName: 
      <br />
      {user}</h1>
      <button className="btnlogout" onClick={handleDelete}>Conform</button>
    </center>
  )
}

export default DeleteUser