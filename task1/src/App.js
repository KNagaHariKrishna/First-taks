import './App.css';
import Login from './login';
import Regiser from './Regiser';
import PagNotFound from './PagNotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from './UserDetails';
import GetAllusers from './getAllusers';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/'element={<Regiser/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path="/UserDetails" element={<UserDetails/>}/>
        <Route path='/GetAllusers' element={<GetAllusers/>}/>
        <Route path="/DeleteUser" element={<DeleteUser />}/>
        <Route path="/EditUser" element={<EditUser />}/>
        <Route path="*" element={<PagNotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
