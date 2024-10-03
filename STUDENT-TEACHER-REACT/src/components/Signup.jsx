import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name, setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=async(e)=>{

        e.preventDefault()
        const data={name,email,phone,password}
        console.log(`>>>>>>>>data>>>>>>`,data)
        const res = await axios.post("http://localhost:3005/user/signup",data)
        console.log(`>>>>>>res>>>>>>>>`,res)
        if(res.status===201){
          alert("data save succeesfully")
        }
        else if(res.status===400){
          alert("all field required")
        }
        else if(res.status===500){
          alert("internel server error")
        }
 
    }
  return (
    <div>
      <h1>Signup</h1>
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
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup