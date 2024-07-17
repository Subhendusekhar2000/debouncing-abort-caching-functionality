import React from "react";
import { Link } from "react-router-dom";

const Navfun=()=>{


    return(
        <>
        <div className="flex flex-row justify-end bg-asidebar h-[45px] ">
        <Link to="/otpfunctionality">
        <p className="mt-[10px] mr-[30px] text-icon" >Otp Functionality</p>
        </Link>
        <Link to="/search">
        <p className="mt-[10px] mr-[30px] text-icon" >Search</p>
        </Link>
        </div>
        </>
    )
}
export default Navfun;