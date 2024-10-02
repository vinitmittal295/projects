import React from 'react'
import {Link} from "react-router-dom"

const Dashbar = () => {
  return (
    <div>
    <h1>this is Dashbar</h1>
    <Link to={"/"}>home</Link>
    <Link to={"/class"}>Class</Link>
    <Link to={"/teacher"}>Teacher</Link>
    <Link to={"/login"}>Login</Link>
    <Link to={"/signup"}>Signup</Link>


        
    </div>
  )
}

export default Dashbar