import React from "react";
import Home from "../components/Home";
import { Button } from "@mui/material";

function HomePage({ userLogin, setUserLogin }) {
  function handleLogin() {
    setUserLogin(true);
    console.log("login");
  }
  function handleLogout(){
    setUserLogin(false);
  console.log("logout")  }
  
  return (
    <div>
      <Home />
      {userLogin ? (<Button
        onClick={handleLogout}
        variant="contained"
        size="small"
        sx={{ margin: 2 }}
      >
        Logout
      </Button>):(<Button
        onClick={handleLogin}
        variant="contained"
        size="small"
        sx={{ margin: 2 }}
      >
        Login
      </Button>) }
      
    </div>
  );
}

export default HomePage;
