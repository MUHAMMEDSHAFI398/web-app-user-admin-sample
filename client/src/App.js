import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import AdminHome from './Components/Admin/Home/Home'
import AdminLogin from './Components/Admin/Login/AdminLogin';
import AddUser from './Components/Admin/AddUser/AddUser';
import EditUser from './Components/Admin/EditUser/EditUser';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>

        <Routes>

        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/signup" element={<Signup/> } />
        <Route exact path="/login" element={<Login/> } />
        <Route exact path="/admin" element={ <AdminLogin/> } />
        <Route exact path="/admin/home" element={ <AdminHome/> } />
        <Route exact path="/admin/adduser" element={ <AddUser/> } />
        <Route exact path="/admin/editUser" element={ <EditUser/> } />


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
