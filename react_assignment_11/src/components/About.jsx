import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
const navigate = useNavigate();
  return (
    <div>
      <h1>This is About page</h1>
      <Button onClick={()=> navigate("/Home")} variant="contained" size="small" sx={{margin:2}}>Redirect</Button>
    </div>
  );
}

export default About;
