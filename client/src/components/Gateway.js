import React from 'react'
import { decodeToken } from "react-jwt";
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";


const Gateway = () => {
    const token = localStorage.getItem("token");
    const decoded = decodeToken(token);

        const isAuth = useSelector((state) => state.userReducer.isAuth);


        if(isAuth && decoded.role==='User')
         return <Redirect to='/profile'/>

         if(isAuth && decoded.role==='Admin')
         return <Redirect to='/admin'/>


    return (
        <div>
            
        </div>
    )
}

export default Gateway
