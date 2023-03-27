import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {


  return (
    <Box>
    <AppBar position="static" sx={{ bgcolor: "#20232a"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
            >
          My Website
        </Typography>
        <Box sx={{display:{xs:'none',md:'flex'}}}>
          <Button color="inherit" >Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Box sx={{display:{xs:'flex', md:'none'}}}>
            <Button sx={{color:'white'}}><MenuIcon /></Button>
        </Box>
        
      </Toolbar>
    </AppBar>
    </Box>
  );
}

export default Nav;
