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
        mobile num:-{user?user.mobnum:null}
        <br />
        age:- {user?user.age:null}
        <div>
          <Link to={"/Login"}>
            <button className="btnlogout" onClick={logout}>Logout</button>
          </Link>
          <Outlet />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Welcome Name</th>
          </tr>
          <tr>
            <th>User Name</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </>
  )
}

export default UserDetails