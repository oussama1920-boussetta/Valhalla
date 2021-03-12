
import React, { useState,useEffect } from "react";

import RegisterModal from "../components/RegisterModal";
import LoginModal from "./LoginModal";



const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();




const Register = () => {



    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setRole("")
  };

  useEffect(()=>{
    setRole("User")
  },[])


  return (
<div className="container-nav">
  <LoginModal/>
     

      <RegisterModal/>

   </div>
           

  
  );
};

export default Register;