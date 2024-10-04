import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Student = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')  
  const[role,setRole]=useState('')
  const[address,setAddress]=useState("")

  const data={
    name,email,phone,role,address
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const res=await axios.post("http://localhost:3005/students/post",data)
    console.log(res);
    if(res.status===200){
      alert("data added")
    }

  }
  
  return (
    <div>
      <h1>Student</h1>
      <form onSubmit={handleSubmit}>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">phone</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e)=>setPhone(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">role</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={role} onChange={(e)=>setRole(e.target.value)} />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={address} onChange={(e)=>setAddress(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">create student</button>
</form>

    </div>
  )
}

export default Student