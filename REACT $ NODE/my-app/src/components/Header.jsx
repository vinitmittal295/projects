// import React from 'react'
import{Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <Link style={{margin:"2px"}} to={"/"}>HOME</Link>
        <Link style={{margin:"2px"}} to={"/about"}>ABOUT</Link>
        <Link style={{margin:"2px"}} to={"/contact"}>CONTACT</Link>
        <Link style={{margin:"2px"}} to={"/demo"}>DEMO</Link>
        
        
    </div>
  )
}

export default Header
