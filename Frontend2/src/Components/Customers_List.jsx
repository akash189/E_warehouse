import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import AdminDashboard from './AdminDashboard';
import AdminNav from './AdminNav';
import axios from 'axios';


function Customers_List() {
  // const customer = [
  //   {
  //       id :'100',
  //       name: "Damodhar jadhao",
  //       email: "Dj@gamil.com",
  //       contact:"9923064941",
  //       password:"abc@123",
  //       city:"Pune"
  //   },
  //   {
  //     id :'101',
  //       name: "Abhishek Patil",
  //       email: "Abhi@gamil.com",
  //       contact:"9764338165",
  //       password:"abhi@123",
  //       city:"Sangali"
  //   },
  //   {
  //     id :'102',
  //       name: "Sagar Chavan",
  //       email: "sagar@gamil.com",
  //       contact:"8999969670",
  //       password:"sagar@123",
  //       city:"jalna"
  //   }
  // ];

  const [customer, setCustomer] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8080/warehouse/customer/data").then(data => {
      setCustomer(data.data)
    }
    ).catch(
      (error) => { console.error(error) }
    )
  }, [])
  let deleteData=(id) => {
    axios.delete("http://localhost:8080/warehouse/customer/delete/"+id).then(data => {
    }
    ).catch(
      (error) => { console.error(error) }
    )
  }


  return (
    <>
      <AdminNav />
      <h3 className="text-center my-3">All Customers</h3>
      <hr />
      <div className="table my-2 container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Customer ID</td>
              <td>Customer Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>City</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {customer.map((val, index) => {
              if (val.status !== 0) {
                return (
                  <tr key={index} className="table-active">
                    <td>{index + 1}</td>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.contact}</td>
                    <td>{val.city}</td>
                    <td>
                      <button
                        onClick={deleteData(val.id)}
                        name={index}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </button>
                      <button
                       // onClick={editData}
                     //   name={index}
                        className="btn btn-warning mx-2"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Customers_List