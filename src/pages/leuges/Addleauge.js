import React,{useState} from 'react'
import axios from "axios"

const Addleauge = ({history}) => { 
    const[leauge, setLeauge] =useState({
      leaugeType: "",
      leaugeName: "",
      leaugeStatus: "",
      participants: ""
    })
    const submitHandler  =async(e)=>{
        e.preventDefault()
        await axios.post("/leauge/leaugepost",{
          leaugeType: leauge.leaugeType,
          leaugeName: leauge.leaugeName,
          leaugeStatus: leauge.leaugeStatus,
          participants: leauge.participants,
        }).then(res =>{
          console.log(res);
            console.log(res.data);
            alert(res.data.message)
            history.push("/leauge")
        })
        setLeauge(leauge)

        }

        const handleInputs = e => {
          setLeauge({ ...leauge, [e.target.id]: e.target.value });
          console.log("CurrentChanges", e.target.id, e.target.value);
        };
    return (
        <>
     
        <div className="container-fluid"> 
        <form onSubmit={submitHandler}>
  <div className="form-group">
  
    <label for="exampleInputEmail1">Leauge Type</label>
    <input type="text" id="leaugeType" className="form-control"  onChange={handleInputs}  aria-describedby="emailHelp"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Leauge Name</label>
    <input type="text" id="leaugeName"  onChange={handleInputs}  className="form-control" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Leauge Status</label>
    <input type="text" id="leaugeStatus"  onChange={handleInputs}  className="form-control" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">	Participants</label>
    <input type="text" id="participants"  onChange={handleInputs}  className="form-control" />
  
  </div>
 
  <button style={{margin:'auto',display:'block'}} type="submit" className="btn btn-success">Submit</button>
  </form>
        </div>
       
        </>
    )
}

export default Addleauge
