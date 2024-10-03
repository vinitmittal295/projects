import React, { useState } from 'react'

const login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email)
    console.log(password)

  }

  return (
    <div>
      <h1>login</h1>

      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
  )
}

export default login