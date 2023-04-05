import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [userLogin, setUserLogin] = useState(false);
  return (
    <div>
      <h1>This is Home page</h1>
      
      <Button onClick={()=> setUserLogin(true)} variant="contained" size="small" sx={{margin:2}}>Login</Button>
    </div>
  );
}

export default Home;
