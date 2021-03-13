import React from "react";

import RegisterModal from "../components/RegisterModal";
import LoginModal from "./LoginModal";

const Register=()=>{  return (
  <div className="container-nav">
    <LoginModal />
    <RegisterModal />
  </div>
);
}



export default Register;
