import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Add_Product() {
    const productList = [
        {
            ID:"101",
            name: "Refrigator",
            Quantity: "200",
           Facilithy_Type:"Non-Ac",            
            charges:"400"
        },
        {
            ID:"102",
            name: "Pepsi-Bottles",
            Quantity: "100",
           Facilithy_Type:"Ac",            
            charges:"400"
        }
    ];

    
    var [product,setProduct] = useState([...productList]);
    var [productObj,setProductObj] = useState({});
    var [FType,setFtype] = useState("");
    var [Quentity,setQuentity] = useState(0);
    var [Charges,setCharges] = useState(0);
    // var [Quentity,setQuentity] = useState(0);
    
    // let onChangeHandler = (e) => {
    //     setProduct({...productObj,[e.target.id]:e.target.value})
    // }

    let Add = () =>{
        console.log(productObj)
        setProduct([...product,productObj])
        setProductObj({})
    }

    let calCharges = ()=>{
        let totalCharges = 0
        if(FType == "AC"){
           totalCharges =  4 * Quentity
           setCharges(totalCharges)
        }else if(FType == "Non-AC"){
            totalCharges = 2 * Quentity
            setCharges(totalCharges)
        }else{
            totalCharges = 0
            setCharges(totalCharges)
        }
         setProductObj({...productObj,['charges']:totalCharges})
    }
     

  return (
    <>
    <Navbar/>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start for add product */}
        <div className="col-3"></div>
        <div className="form col-6 my-5 border p-4">
          <h4 className="text-center m-2">Add Product</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  onChange={(e)=>{
                    setProductObj({...productObj,['name']:e.target.value})
                  }}
                />
              </div>
              <div className="col-6">
                <label htmlFor="Quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Quantity"
                  required
                  onChange={(e)=>{
                   setQuentity(e.target.value)
                   setProductObj({...productObj,['Quantity']:e.target.value})
                  }}
                />
              </div>
            </div>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="Facilithy_Type">Facility Type</label>
                  <select className="form-control" id="Facilithy_Type"
                  onChange={(e)=>{
                    setFtype(e.target.value)
                    setProductObj({...productObj,[e.target.id]:e.target.value})
                   }} value={FType}
                  > 
                  <option value= "">Select Facility</option>  
                  <option value= "Non-AC">Non-AC</option>  
                    <option value="AC">AC</option>                
                  </select>
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="Charges" className="form-label">
                  Total Charges
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Charges"
                  required
                //   onChange={(e)=>{
                //     setProductObj({...productObj,['charges']:e.target.value})
                // }}
                readOnly
                  value= {Charges}
                />
              </div>
            </div>
            <button type="button" className="btn btn-outline-success m-3" onClick={calCharges}>
              Cal Charges
            </button>
            <button type="button" onClick={Add} className="btn btn-outline-success m-3">
              Add_Product
            </button>
          </form>
        </div>
        <div className="col-3"></div>
        {/* From End */}
      </div>
        <div className="htitle m-5">
            <h3 className="text-center">Your Products</h3> 
            <div id="headline"></div>           
        </div>        
      <div className="maincard m-3 p-3 d-flex flex-wrap">      
        {
            product.map((item,index)=>{
                return (
            <div key={index} className="card p-1 m-2" id = 'Cards' style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-subtitle mb-2">Product Name : {item.name}</h5>
                <h6 className="card-subtitle mb-2"> Product ID : {item.ID}</h6>
                {/* <h5 className="card-title">Product Name</h5> */}
                <h6 className="card-subtitle mb-2">Facility Type : {item.Facilithy_Type}</h6>
                <h6 className="card-subtitle mb-2"> Total Charges : {item.charges}</h6>
                {/* <p className="card-text">{item.}</p> */}
                
            </div>
            
        </div>
             ) })
        }
        
    </div>
        <Footer/>
    </>
  );
}

export default Add_Product;
