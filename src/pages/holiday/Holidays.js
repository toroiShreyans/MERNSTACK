import React from 'react'
import { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import axios from "axios"
import { Link } from 'react-router-dom'


import "./holiday.css"

const Holidays = ({ match }) => {

  const [holidays, setholiday] = useState([])
  const [refresh, setrefresh] = useState(false)


  useEffect(() => {

    const fetchholiday = async () => {
      const { data } = await axios.get("/holiday/getholiday")
      console.log("Data", data)
      setholiday(data?.data)


    }
    fetchholiday()
  }, [refresh])
  const deleteButton = async (_id) => {

    console.log("holiday deleted")
    try {
      const res = await axios.delete(`/holidays/delete/${_id}`);
      if (res.data.message) {
        alert(res.data.message);
        setrefresh(!refresh)

      } else {
        console.log("data not found")
      }
    }

    catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="container">
        <Table striped bordered hover>
          <thead >

            <button><Link to="/addholiday">Add Holiday</Link></button>
            <tr>

              <th>#</th>
              <th>DATE</th>
              <th>DAY</th>
              <th>DESCRIPTION</th>
              <th colSpan={2}>ACTION</th>
            </tr>
          </thead>
          <tbody className="">
            {
              (holidays && holidays?.length > 0) && holidays?.map((holiday, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{holiday?.DATE}</td>
                  <td>{holiday?.DAY}</td>
                  <td>{holiday?.DESCRIPTION}</td>
                  <td> <Link to={`/holiday/${holiday?._id}`}>Edit</Link> </td>
                  <td onClick={() => deleteButton(holiday?._id)}><Link to={`#`} style={{color:"red"}}>Delete</Link> </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Holidays
