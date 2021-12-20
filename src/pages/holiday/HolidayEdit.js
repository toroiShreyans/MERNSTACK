import React,{useEffect,useState} from 'react'
import axios from "axios"


const HolidayEdit = ({match,history}) => {
  const [day,setDay] = useState("")

  const [date,setDate] = useState("")

  const [description,setDescription] = useState("")

    console.log("match",match)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{
       if(match?.params?.id){
        console.log('id',match?.params?.id)
        const {data} = await axios.get(`/holidays/getholiday/${match?.params?.id}`)
        console.log(data)
        setDay(data?.DAY)
        setDate(data?.DATE)
        setDescription(data?.DESCRIPTION)
       }else{
        history?.push('/holiday')
       }
    },[match?.params,history])
    
    const submitHandler = (e)=>{
        e.preventDefault()
        const requestBody = { DATE:date,   DAY:day,  DESCRIPTION:description} 
        axios.put(`/holidays/update/${match?.params?.id}`,requestBody)
        .then((res)=>{
          if(res?.data){
            alert(res?.data?.message)
            history?.push('/holiday')
          }
        }).catch((err)=>{
          console.log('Error',err)
          alert('Somthing went wrong')
        })
    }

    return (
        <>
       <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 card">
            <div className="card-body">
            <form onSubmit={submitHandler}>
            <div className="row form-group">
            <div className="col-sm-6">
               <label className="label">Day</label>
                <input value={day} type='text' onChange={(e)=>setDay(e.target.value)} className="form-control" placeholder="Enter day" />
            </div>
            <div className="col-sm-6">
               <label className="label">Date</label>
                <input value={date} type='text' onChange={(e)=>setDate(e.target.value)} className="form-control" placeholder="Enter date" />
            </div>
            </div>
            <div className="row">
            <div className="form-group col-sm-12">
               <label className="label">Description</label>
                <textarea value ={description}rows="5" onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Enter your description here..."/>
            </div>
            </div>
            <br/>
            <input type='submit' value="Update" className="btn btn-info" style={{margin:'auto',display:'block'}} />
          </form>
            </div>
          
          </div>
        </div> 
       </div>

      </>
    )
}

export default HolidayEdit
