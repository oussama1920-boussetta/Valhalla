import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import { decodeToken } from "react-jwt";



const AdminNav = () => {

  const logout=()=>{
    localStorage.clear()
    window.location.href='/';
  }
  const token = localStorage.getItem('token');
  const decoded = decodeToken(token);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">Welcome {decoded.name}!</Typography>
          <Button onClick={logout} style={{ marginLeft: "90%" }} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminNav;
