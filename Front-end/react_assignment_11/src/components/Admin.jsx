import { Button } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";

function Admin({ userLogin }) {
    
  return (
    <div>
      <img
        src="https://www.humanesociety.org/sites/default/files/2021-02/mink-186995.jpg"
        width="200px"
        height="200px"
        alt="profile"
      />
      <h1>This is Admin Page</h1>
    </div>
  );
}

export default Admin;
