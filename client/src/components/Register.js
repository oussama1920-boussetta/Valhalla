

import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
const Register = () => {


  // const dispatch = useDispatch();

  // const addUser = () => {
  //   dispatch(
  //     userRegister({
  //       name,
  //       email,
  //       phoneNumber,
  //       password,
  //       role
  //     })
  //   );

    // setName("");
    // setEmail("");
    // setPhoneNumber("");
    // setPassword("");
    // setRole("");
  // };
  return (
<div className="container-nav">
  <LoginModal/>
      {/* <Link to="/login">
      <Button variant="danger">Login</Button>{' '}      </Link> */}

      <RegisterModal/>





    
    </div>
  );
};

export default Register;