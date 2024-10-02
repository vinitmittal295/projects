import React from 'react'

const Class = () => {
  return (
    <div>
      <h1>Class</h1>

      <form>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Batch Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Time </label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Duration</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">subject</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">fee</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">week off</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Number of Seat</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Create class</button>
</form>
    </div>
  )
}

export default Class