import React from 'react'
import AdminNav from './AdminNav'

function Feedback_List() {

    const customer = [
        {            
            name: "Damodhar jadhao",            
            contact:"9923064941",            
            Comment:"Contact cskldfjd"
        },
        {
          id :'101',
            name: "Abhishek Patil",                     
            contact:"9923064941",            
            Comment:"Contact cskldfjd"
            
        },
        {
          id :'102',
            name: "Sagar Chavan",
            contact:"9923064941",            
            Comment:"Contact cskldfjd"
        }
      ]; 

  return (
    <div> <AdminNav/>
    
    <h3 className="text-center my-3">Feedbacks</h3>
            <hr />
            <div className="table my-2 container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <td>Sr.No</td>              
              <td>Customer Name</td>              
              <td>Contact</td>
              <td>Comment</td> 
              <td>Action</td>             
            </tr>
          </thead>
          <tbody>
            {customer.map((val, index) => {
              if (val.status !== 0) {
                return (
                  <tr key={index} className="table-active">
                    <td>{index + 1}</td>                    
                    <td>{val.name}</td>                    
                    <td>{val.contact}</td>
                    <td>{val.Comment}</td>
                    <td>
                      <button
                        // onClick={deleteData}
                        // name={index}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </button>
                      <button
                        // onClick={deleteData}
                        // name={index}
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
    
    </div>
  )
}

export default Feedback_List