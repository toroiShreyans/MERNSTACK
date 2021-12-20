import React from 'react'
import { useState ,useEffect} from 'react'
import axios from "axios"

const LeaugeEdit = ({match,history}) => {

const [leaugetype, setLeaugeType] = useState("")
const [leaugename, setLeaugeName] = useState("")
const [leaugestatus, setLeaugeStatus] = useState("")
const [participant, setParticiapant] = useState("")

console.log("shreyans", match)

useEffect(()=>{
const fetchdata =(async() => {
  if(match?.params?.id){ 
   const {data} = await axios.get(`/leauge/getleauge/${match?.params?.id}`)
   console.log("leaugedata",data)
  const leaug = data.payload.data.leauges
   console.log("leugeshow", leaug)
  setLeaugeType(leaug?.leaugeType)
  setLeaugeName(leaug?.leaugeName)
  setLeaugeStatus(leaug?.leaugeStatus)
  setParticiapant(leaug?.participants)
  console.log(fetchdata)
  }else{
   history?.push('/leaugeEdit')
  }
  fetchdata()
})
},[match?.params,history])
   

    const submitHandler = (e)=>{
      e.preventDefault()
      const requestBody = { LeaugeType:leaugetype,LeaugeName:leaugename,LeaugeStatus:leaugestatus,Participants:participant} 
      axios.put(`/leauge/updateleauge/${match?.params?.id}`,requestBody)
      .then((res)=>{
        if(res?.data){
          alert(res?.data?.message)
          history?.push('/leauge')
    
        }
      }).catch((err)=>{
        console.log('Error',err)
        alert('Somthing went wrong')
      })
  }
    return (
        <>
     
        <div className="container-fluid"> 
        <form onSubmit={submitHandler}>
  <div className="form-group">
  
    <label for="exampleInputEmail1">Leauge Type</label>
    <input type="text" value={leaugetype}  className="form-control" onChange={(e)=>setLeaugeType(e.target.value)} aria-describedby="emailHelp" />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Leauge Name</label>
    <input type="text" value={leaugename}  className="form-control" onChange={(e)=>setLeaugeName(e.target.value)} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Leauge Status</label>
    <input type="text" value={leaugestatus}  className="form-control" onChange={(e)=>setLeaugeStatus(e.target.value)}  />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">	Participants</label>
    <input type="text" value={participant} className="form-control" onChange={(e)=>setParticiapant(e.target.value)}/>
  
  </div>
 
  <button style={{margin:'auto',display:'block'}} type="submit" className="btn btn-success">Submit</button>
  </form>
        </div>
       
        </>
    )
}

export default LeaugeEdit
