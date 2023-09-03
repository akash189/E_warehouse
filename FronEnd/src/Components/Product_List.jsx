import React from "react";
import Navbar from "./Navbar";
import AdminNav from "./AdminNav";

function Product_List() {
  const productList = [
    {
      ID: "101",
      name: "Refrigator",
      Quantity: "200",
      Facilithy_Type: "Non-Ac",
      charges: "400",
    },
    {
      ID: "102",
      name: "Pepsi-Bottles",
      Quantity: "100",
      Facilithy_Type: "Ac",
      charges: "400",
    },
  ];

  return (
    <>
      <AdminNav />
      {/* <div className="maincard m-3 p-3">
        <h6 className='text-center'>Your Products</h6>
        <div class="card p-3" style={{width:"18rem"}}>
            <div class="card-body">
                <h5 class="card-title">Product Name</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
        </div>
    </div> */}

      {/* table */}
      <h3 className="text-center my-3">Available Products</h3>
            <hr />
      <div className="table my-2 container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>ID</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Facility</td>
              <td>Charges</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {productList.map((val, index) => {
              if (val.status !== 0) {
                return (
                  <tr key={index} className="table-active">
                    <td>{index + 1}</td>
                    <td>{val.ID}</td>
                    <td>{val.name}</td>
                    <td>{val.Quantity}</td>
                    <td>{val.Facilithy_Type}</td>
                    <td>{val.charges}</td>
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
                        Delete
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
  );
}

export default Product_List;
