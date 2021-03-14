import React from "react";

import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

const HomePage=()=>{  return (
  <div className="container-nav">
    <LoginModal />
    <RegisterModal />
  </div>
);
}



export default HomePage;
