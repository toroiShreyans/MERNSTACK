
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'



const Leauge = ({match}) => {
 const [leauges, setLeauge] = useState([])

useEffect(()=>{
    const fetchLeauge =async()=>{
     const {data} = await axios.get("/leauge/dailyLeauge")
     console.log(data)
     setLeauge(data.payload.data.leauges)
    }
    fetchLeauge()
},[])

const deleteButton =async(_id)=>{
  try {
    const res = await axios.delete(`/leauge/deleteleauge/${_id}`)
    console.log("leuage deleted")
    if(res.data.message){
      alert(res.data.message)
    }
    console.log("data not found")
  } catch (error) {
    
  }
}


    return (
      <>
        <div className="container fluid">
<table class="table table-dark">
  <thead>
  <button type="button" class="btn-btn danger btn-sm" ><Link to="/addleauge">Add Leauge</Link></button>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Leauge Type</th>
      <th scope="col">Leauge Name</th>
      <th scope="col">Leauge Status </th>
      <th scope="col">Participants</th>
      <th colSpan={2}>ACTION</th>
    </tr>
  </thead>
  <tbody>
  {
              (leauges && leauges?.length > 0) && leauges?.map((leauge, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{leauge?.leaugeType}</td>
                  <td>{leauge?.leaugeName}</td>
                  <td>{leauge?.leaugeStatus}</td>
                  <td>{leauge?.participants}</td>
                  <td> <Link to={`/leaugeEdit/${leauge?._id}`}>Edit</Link> </td>
                  <td onClick={()=>deleteButton(leauge?._id)}><Link to={`#`}style={{color:"red"}}>Delete</Link> </td>
                </tr>
              ))
            } 
  </tbody>
</table>
        </div>
        </>
    )
}

export default Leauge
