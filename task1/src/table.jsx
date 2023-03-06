import React from 'react'
import { useNavigate } from 'react-router-dom'
function Table(user,props) {
    const navigate = useNavigate()
    // console.log(user.user.age);
    const handleEdit=()=>{
        navigate("/EditUser", { state: JSON.stringify(user.user.username) })
    }
    const handleDelete=()=>{
        navigate("/DeleteUser", { state: JSON.stringify(user.user.username) })
        // console.log(user.user.username);
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
    </>
  )
}

export default Table