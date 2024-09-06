// import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      <Link to={"/"}>HOME</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Link to={"/header"}>HEADER</Link>
      <Link to={"/contact"}>CONTACT</Link>
      <Link to={"/counter"}>COUNTER</Link>
      <Link to={"/form"}>FORM</Link>
    </div>
  )
}

export default Header
