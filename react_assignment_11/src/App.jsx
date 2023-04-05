import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Button } from "@mui/material";
import AdminPage from "./pages/AdminPage";

function App() {
  const [userLogin, setUserLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage userLogin={userLogin} setUserLogin={setUserLogin}/>} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Admin" element={<AdminPage userLogin={userLogin} setUserLogin={setUserLogin}/>} />
      </Routes>

      <nav>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Admin">For Admin!!</NavLink>
      </nav>
    </BrowserRouter>
  );
}

export default App;
