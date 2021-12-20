import "./userList.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

const UserList=() =>{
  const [users, setUser]= useState("")
 

useEffect(()=>{
  const fetchdata = (async()=>{
    const {data} = await axios.get("/user/userget")
    console.log("your data", data)
    setUser(data?.data)
  })
  fetchdata()
},[])


  return(
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
      (users && users?.length>0) && users?.map((user,index )=>(
       <tr key={index}>
         <td >{index + 1}</td>
         <td >{user?.fullName}</td>
         <td> {user?.mobile}</td>
         <td >{user?.email}</td>
         </tr>
      ))
    }
    </tbody>
</table>
    </>
  )
}
export default UserList