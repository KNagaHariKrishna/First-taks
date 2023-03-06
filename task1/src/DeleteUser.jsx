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
      const resp = await fetch(`http://localhost:5000/deluser?username=${user}`,{
            method: 'DELETE'
        })
        const data = await resp.json()
        console.log(data);
        if(data){
            navigate("/GetAllusers")
        }
    }
  return (
    <>
    <h1>You Are Deleting UserName: {user}</h1>
      <button className="btnlogout" onClick={handleDelete}>Conform</button>
    </>
  )
}

export default DeleteUser