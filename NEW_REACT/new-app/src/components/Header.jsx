// import React from 'react'
import{Link} from"react-router-dom"

function Header() {
  return (
    <div>
      <h1>this is header</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  )
}

export default Header
