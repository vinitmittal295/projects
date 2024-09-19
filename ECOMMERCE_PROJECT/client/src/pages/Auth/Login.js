// import React from 'react'
import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()


    const handlseSubmit=async (e)=>{
        e.preventDefault()
        try {
            const res=await axios.post("/api/v1/auth/login",{email,password})
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)

            
        }

    }
  return (
    <Layout title="register-ecommerce App">
    <div className="form-container">
    <h1>Login page</h1>
    <form onSubmit={handlseSubmit}>
  <div className="mb-3">
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='enter your email' required/>
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"  placeholder='enter password' required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
    
    </Layout>
  )
}

export default Login