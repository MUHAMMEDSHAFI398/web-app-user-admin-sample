import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/signup" element={<Signup/> } />
        <Route exact path="/login" element={<Login/> } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
