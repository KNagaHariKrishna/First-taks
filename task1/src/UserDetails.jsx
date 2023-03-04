import "./App.css"
import { Link, Outlet } from "react-router-dom";
import "./UserDetails.css"

// const UserContext = createContext();
function UserDetails() {

  const logout=()=>{
    localStorage.clear();
  } 

  const data = localStorage.getItem("user")
  const user = JSON.parse(data)
  // console.log(JSON.parse(data));
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
            <th colspan="3" className="heading">Welcome {user ? user.username : null}</th>
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
        <Link to={"/Login"}>
          <button className="btnlogout" onClick={logout}>Logout</button>
        </Link>
        <Outlet />
      </div>
    </>
  )
}

export default UserDetails