import "./App.css"
import { Link, Outlet } from "react-router-dom";
import "./UserDetails.css"
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// const UserContext = createContext();
function UserDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUserData] = useState(JSON.parse(location.state));
  const logout = (e) => {
    e.preventDefault()
    setUserData({})
    localStorage.clear();
    // window.location.reload()
    navigate("/Login")
  } 

  // const data = localStorage.getItem("user")
  // const user = JSON.parse(data)
  // console.log(JSON.parse(data));
  // const userData = location.state;
  // console.log(JSON.parse(userData));

  const HandleAllUses=()=>{
    const token = localStorage.getItem("jwt")
    if (user.username =="NagaHarKrishna" && token){
      navigate("/GetAllusers")
    }else{
      navigate("/UserDetails")
    }
  }

  return (
    <>
      <div className='header'>
        <h4>LOGO</h4>
        <div className='profile'>
          <span className='name'>{user?user.username:null}</span>
          <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="profileimg" />
        </div>
      </div>
      <div className='body'>
        {/* mobile num:-{user?user.mobnum:null}
        <br />
        age:- {user?user.age:null} */}
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th colSpan="3" className="heading">Welcome {user ? user.username : null}</th>
          </tr>
          <tr>
            <th>S.no</th>
            <th>User Details</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>UserName</td>
            <td className="bold">{user ? user.username : null}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mobile Number</td>
            <td className="bold">{user ? user.mobnum : null}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Age</td>
            <td className="bold">{user ? user.age : null}</td>
          </tr>
        </tbody>
      </table>
      <div>
        {/* <Link to={"/Login"}> */}
          <button className="btnlogout" onClick={logout}>Logout</button>
        {/* </Link> */}
        {/* <Outlet /> */}
      </div>
      <br />
      If You Are Admin pls Click <button className='btnlogin' style={{ width: 100 }} onClick={HandleAllUses}>Here</button>
      {/* <a href="/GetAllusers">Hear</a> */}
    </>
  )
}

export default UserDetails