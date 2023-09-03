import React from 'react'
import Navbar from "./Navbar";


function Profile() {
  return (
    <>
    <Navbar/>
    <div className="profile d-flex m-5 p-4 justify-content-center">
    <div className="card bg-dark text-white " style={{height:"300px", width:"300px"}}>
  <img id="bgimage"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_trQFzq07k4zFIkAu3ROxmJSj36KNgIzNjQ&usqp=CAU" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Fisrt Name</h5>
    <h5 className="card-title">Last Name</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
    </div>
    
    </>
  )
}

export default Profile