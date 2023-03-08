import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Table(user,props) {
  const [showDiv, setShowDiv] = useState(false);
    const navigate = useNavigate()
    // console.log(user.user.age);
    const handleEdit=()=>{

        navigate("/EditUser", { state: user.user })

    }
    const handleDelete=()=>{
        // navigate("/DeleteUser", { state: JSON.stringify(user.user.username) })
        // console.log(user.user.username);
        setShowDiv(!showDiv);
    }
    const handleDelete1= async ()=>{
        let tok = localStorage.getItem("jwt")
        const resp = await fetch(`http://localhost:5000/deluser?username=${user.user.username}`, {
          method: 'DELETE',
          headers: {
            "Authorization": tok,
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        })
        const data = await resp.json()
        console.log(data);
        if (data) {
          window.location.reload()
          setShowDiv(!showDiv);
          navigate("/GetAllusers")
        }
    }
  return (
    <>
        <tr>
            <td></td>
            <td>{user.user.username}</td>
            <td>{user.user.mobnum}</td>
            <td>{user.user.age}</td>
              <td><button className='btnlogin' style={{ backgroundColor:"#0a0a23"}} onClick={handleEdit}>Edit</button></td>
              <td><button className="btnlogout" onClick={handleDelete} style={{margin:0}}>Delete</button></td>
        </tr>
      {showDiv && (
        <div
          style={{
            position: "fixed",
            color:"black",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "lightblue",
            height:"350px",
            width:"500px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >     
          <center>
            <h1>You Are Deleting UserName:
              <br />
              {user.user.username}</h1>
          </center>
          <button className="btnlogout" onClick={handleDelete1}>Conform</button>
        </div>
      )}
    </>
  )
}

export default Table