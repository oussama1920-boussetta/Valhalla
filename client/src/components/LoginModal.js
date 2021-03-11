
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";


 import{Button,Card,Form} from 'react-bootstrap';

function LoginModal() {



    const [logUser, setLogUser] = useState({
     
        email: "",
        password: "",
      
    });
    const handleChange = (e) => {
        setLogUser({ ...logUser, [e.target.name]: e.target.value });
    };






    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <div>
            <Button variant="danger" onClick={handleShow}>
        Login
</Button>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='Add'>
         <Card.Body>
         <Card.Text>
             <Form>
              

               <Form.Group
                 controlId="formBasicEmail"
                 style={{ textAlign: "left" }}
               >
                 <Form.Label>email :</Form.Label>
                 <Form.Control
                   type="email"
                   name="email"
                   placeholder="Enter your email"
                   onChange={handleChange}
                   required 
                 />
               </Form.Group>
               <Form.Group
                 controlId="formBasicEmail"
                 style={{ textAlign: "left" }}
               >
                 <Form.Label>password :</Form.Label>
                 <Form.Control
                   type="password"
                   name="password"
                   placeholder="Enter your password"
                   onChange={handleChange} />
               </Form.Group>

         
             </Form>
           </Card.Text>
         </Card.Body>
        
        
        
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Close
    </Button>
            <Button variant="danger" onClick={() => {
               
                handleClose()
            }}>
               Confirm
    </Button>
        </Modal.Footer>
    </Modal>
        </div>
    )
}

export default LoginModal
