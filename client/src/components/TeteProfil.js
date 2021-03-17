import React from 'react'
import {Navbar} from 'react-bootstrap'
import text from '../components/images/text.png'
function TeteProfil() {
    return (
        <div>
 
  <Navbar bg="dark">
    <Navbar.Brand href="">
      <img
        src={text}
        width="1250"
        height="320"
        
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>  

  
        </div>
    )
}

export default TeteProfil
