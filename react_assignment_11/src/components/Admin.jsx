import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Admin({userLogin}) {
    const navigate = useNavigate();
    function checkLogin(){
        if (userLogin == true){
            navigate("/Admin")
        }
    }
  return (
    <div>
    <img src="https://www.humanesociety.org/sites/default/files/2021-02/mink-186995.jpg" width="200px" height="200px"alt="profile"/>
      <h1>This is Admin Page</h1>
     
      <Button onClick={()=> checkLogin} variant="contained" size="small" sx={{margin:2}}>Logout</Button>
    </div>
  );

}

export default Admin;
