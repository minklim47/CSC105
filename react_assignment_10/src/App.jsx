import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Container, Box, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <Box>
      <Nav />
      <Container className="App">
        <Grid container direction="row">
          <Grid item>
            <Sidebar />
          </Grid>
          <Grid item>
            <Content />
          </Grid>
          <Grid item>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
