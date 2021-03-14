import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);

  return (
    <div>{loading ? <h1>Please wait </h1> : <p style={{color:"red"}}>{JSON.stringify(user)}</p>}</div>
  );
};

export default Profile;