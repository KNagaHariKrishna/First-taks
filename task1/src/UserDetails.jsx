import "./App.css"
import { Link, Outlet } from "react-router-dom";

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
    </>
  )
}

export default UserDetails