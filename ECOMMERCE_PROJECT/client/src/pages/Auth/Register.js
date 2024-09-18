// import { useState } from 'react'
import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import{toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("")
    const navigate=useNavigate()
    // form function

    const handlseSubmit=async (e)=>{
        e.preventDefault()
        try {
            const res=await axios.post("/api/v1/auth/register",{name,email,password,phone,address})
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)

            
        }

        

    }
    
  return (
    <Layout title="register-ecommerce App">
    <div className="register">
    <h1>Register page</h1>
    <form onSubmit={handlseSubmit}>
  <div className="mb-3">
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='enter your name' required/>
  </div>
  <div className="mb-3">
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='enter your email' required/>
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"  placeholder='enter password' required/>
  </div>
  <div className="mb-3">
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='enter phone' required />
  </div>
  <div className="mb-3">
    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='enter address' required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
    
    </Layout>
  )
}

export default Register