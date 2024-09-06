// import React from 'react'
import { useNavigate } from "react-router-dom"


function About() {
    const navigate =useNavigate()
    const abc=()=>{
        navigate("/contact")
    }
    const abcd=()=>{
        navigate("/")
    }
    const abce=()=>{
        navigate("/home")
    }


  return (
    <div>
        <h4 onClick={abc} style={{color:"blue"}}>keshav contact</h4>
        <h4 onClick={abcd} style={{color:"blue"}}>kuldeep  </h4>
        <h4 onClick={abce} style={{color:"blue"}}>nikita home</h4>
    </div>
  )
}

export default About
