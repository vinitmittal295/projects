import React, { useEffect, useState } from 'react'
import axios from 'axios'

const StudentDataShow = () => {
    const[data,setData]=useState([]) //all
    const [view,setView]=useState([]) //one
    const[modelview,setModelView]=useState(false) // model

    useEffect(()=>{
        fetch()
    },[])

    const fetch=async()=>{
        const response=await axios.get("http://localhost:3005/students/get")
        console.log(response.data);
        setData(response.data)
        if(response.status===200){
            alert("data fetched successfully")
        }
        
    }
    const getdetails=async(id)=>{
        console.log(">>>id >>>",id)
        const res=await axios.get(`http://localhost:3005/students/${id}`)
        console.log(res.data)
        setView(res.data)
        setModelView(true)
    };

    const modelclose=()=>{
        setModelView(false)
    }


  return (
    <div>
    <h1>StudentDataShow</h1>
    
    <div>
    {
        (
            data.map((item,index)=>(
                <div key={index} style={{border:"1px solid black" ,padding:"10px" ,margin:"10px"}}>
                    <p>name:-{item.name}</p>
                    <p>email:-{item.email}</p>
                    <p>phone:-{item.phone}</p>
                    <p>role:-{item.role}</p>
                    <p>address:-{item.address}</p>
                    <button onClick={()=>getdetails(item._id)}>get deails</button>
                </div>
            ))
        )
    }
    </div>

     {/*model start here  */}

     {modelview && view &&(
        <div className="modal" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal name:{view.name}-</h5>
        <h5 className="modal-title">Modal email:- {view.email}</h5>
        <h5 className="modal-title">Modal phone:- {view.phone}</h5>
        <h5 className="modal-title">Modal role:- {view.role}</h5>
        <h5 className="modal-title">Modal address:- {view.address}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={modelclose}>Close</button>
      </div>
    </div>
  </div>
</div>
     )}

    </div>
  )
}

export default StudentDataShow