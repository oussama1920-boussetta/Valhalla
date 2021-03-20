import React from 'react'
import {Navbar} from 'react-bootstrap'
import Button from "@material-ui/core/Button";
import text from '../components/images/text.png'
function TeteProfil() {
  const logout=()=>{
    localStorage.clear()
    window.location.href='/';
  }
    return (
        <div>
 <Button onClick={logout} style={{ marginLeft: "90%" }} color="inherit">
            Logout
          </Button>
  <Navbar bg="dark">
    <Navbar.Brand href="">
      <img
        src={text}
        width="1250"
        height="320"
        style={{marginLeft:"100px"}}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>  

  
        </div>
    )
}

export default TeteProfil
