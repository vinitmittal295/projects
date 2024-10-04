import axios from 'axios'
import React, { useEffect, useState } from 'react'


const TeacherDataShow = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        fetch()
    },[])

    const fetch=async()=>{
        const res=await axios.get("http://localhost:3005/teachers/get")
        setData(res.data)
        if(res.status===200){
            alert("data fetched successfully")
        }
    }

    const getdetails=async(id)=>{
        console.log(">>>id >>>",id)
        const res=await axios.get(`http://localhost:3005/teachers/${id}`)
        console.log(res.data)
        setData(res.data)
    };

  return (
    <div>
    <h1>TeacherDataShow</h1>

    <div>
    {
        (
            data.map((item,index)=>(
                <div key={index} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
                <p>name:-{item.name}</p>
                <p>email:-{item.email}</p>
                <p>qualification:-{item.qualification}</p>
                <p>salary:-{item.salary}</p>
                <p>batchname:-{item.batchname}</p>
                <p>experience:-{item.experience}</p>
                <p>role:-{item.role}</p>
                <p>joinDate:-{item.joinDate}</p>
                <p>employeId:-{item.employeId}</p>
                <button onClick={()=>getdetails(item._id)}>get deails</button>
                </div>
            ))
        )
    }

    </div>
    </div>
  )
}

export default TeacherDataShow