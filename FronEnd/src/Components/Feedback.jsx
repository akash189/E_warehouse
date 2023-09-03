import React from "react";
import Navbar from "./Navbar";


function Feedback() {
  return (
    <>
    <Navbar/>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start */}
        <div className="col-3"></div>
        <div className="form col-6 my-5 border p-4">
          <h4 className="text-center m-2">FeedBack Form</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3">
              <label htmlhtmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Comment
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Please Enter your feedBack message"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-success m-3">
              submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>

        {/* From End */}
      </div>
    </>
  );
}

export default Feedback;
