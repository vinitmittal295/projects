import React, { useState } from 'react'

const teacher = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [qualification,setQualification] = useState("")
    const [salary,setSalary] = useState("")
    const [batchname,setBAtchname] = useState("")
    const [experience,setExperience] = useState("")
    const [phone,setPhone] = useState("")
    const [role,setRole] = useState("")
    const[joindate,setJoinDate] = useState("")
    const[employeId,setEmployeeId] = useState("")
    






  return (
    <div>
    <h1>teacher</h1>

    <form>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">qualification</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">salary</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">batch name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">experience</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">phone</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">role</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">join date</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">employeId</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Create teacher</button>
</form>
  </div>
  )
}

export default teacher