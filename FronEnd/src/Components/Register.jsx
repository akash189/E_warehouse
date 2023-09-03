import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start */}
        <div className="col-3"></div>
        <div className="form col-6 my-5 border p-4">
          <h4 className="text-center m-2">Register</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <label htmlhtmlFor="fname" className="form-label">
                  FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  required
                  placeholder="Enter your FirstName"
                />
              </div>
              <div className="col-6">
                <label htmlhtmlFor="lname" className="form-label">
                  LastName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter your lastName"
                  required
                />
              </div>
            </div>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <label htmlhtmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-6">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <label htmlhtmlFor="Contact" className="form-label">
                  Contact
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="Contact"
                  required
                  placeholder="Enter your Contact"
                  maxLength={10}                  
                />
              </div>
              <div className="col-6">
                <label htmlhtmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter your city"
                  required
                />
              </div>
            </div>
            <button type="submit" onClick={()=>{
              navigate("/Home")
            }} className="btn btn-success m-3">
              Register
            </button>
            <br />
            <Link to="/Login">already have a Account, Login</Link>
          </form>
        </div>
        <div className="col-3"></div>

        {/* From End */}
      </div>
    </>
  );
}

export default Register;
