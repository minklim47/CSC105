import React from "react";
import Admin from "../components/Admin";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function AdminPage({ userLogin, setUserLogin }) {
  const navigate = useNavigate();

  if (!userLogin) {
    return <Navigate to="/Home" />;
  }
  function handleLogout(){
    setUserLogin(false)
    console.log("logout")
  }
  return (
    <div>
      <Admin />
      <Button
        onClick={handleLogout}
        variant="contained"
        size="small"
        sx={{ margin: 2 }}
      >
        Logout
      </Button>
    
    </div>
  );
}

export default AdminPage;
