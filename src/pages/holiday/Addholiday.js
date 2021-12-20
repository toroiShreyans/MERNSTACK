
import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Addholiday = ({history}) => {
    
    const [holidays, setHoliday] = useState({
        DAY: "",
        DATE: "",
        DESCRIPTION: ""
    })
   
    const eventHandler=async(e)=>{
       
        e.preventDefault()
       await axios.post(`/holidays/newdata`,{
        DAY: holidays.DAY,
        DATE: holidays.DATE,
        DESCRIPTION: holidays.DESCRIPTION
        }).then(res => {
            console.log(res);
            console.log(res.data);
            alert(res.data.message)
            history.push("/holiday")
          })
        
        setHoliday(holidays)
    }
    const handleInputs = e => {
        setHoliday({ ...holidays, [e.target.id]: e.target.value });
        console.log("CurrentChanges", e.target.id, e.target.value);
      };
    return (
        <div>
            <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 card">
            <div className="card-body">
            <form onSubmit={eventHandler}>
            <div className="row form-group">
            <div className="col-sm-6">
               <label className="label">Day</label>
                <input  type='text' id="DAY"  onChange={handleInputs} value={holidays.DAY} className="form-control" placeholder="Enter day" />
            </div>
            <div className="col-sm-6">
               <label className="label">Date</label>
                <input  type='text' id="DATE"   className="form-control" onChange={handleInputs} value={holidays.DATE}  placeholder="Enter date" />
            </div>
            </div>
            <div className="row">
            <div className="form-group col-sm-12">
               <label className="label">Description</label>
                <textarea rows="5" id="DESCRIPTION" className="form-control" onChange={handleInputs} value={holidays.DESCRIPTION}  placeholder="Enter your description here..."/>
            </div>
            </div>
            <br/>
            <input type='submit' value="AddOne" className="btn btn-primary" style={{margin:'auto',display:'block'}} />
          </form>
            </div>
          
          </div>
        </div> 
       </div>

        </div>
    )
}

export default Addholiday
