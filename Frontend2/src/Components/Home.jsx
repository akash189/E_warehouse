import React from 'react'
import Footer from './Footer'
import Navbar from "./Navbar";


function Home() {
  return (
   <>
   <Navbar/>
   <div className="main m-1">
    {/* crousal start */}
    <section>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
  <div className="carousel-item active">
      <img style={{height:"500px"}} src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">
      <img style={{height:"500px"}} src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img style={{height:"500px"}} src="https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>    
    </section>
    {/* crousal End */}

    {/* cards Start */}
    <div className="mainheadline">
        <h4 className='text-center mt-3'>Facility Pricing</h4>
        <div className="headingunderline"></div>
    </div>
    
    <div className="pricing d-flex justify-content-center">
        <div className="col-4 m-3 card mb-4 rounded-3 shadow-sm bg-dark text-light">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">AC</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">120<small className="text-body-secondary fw-light">/month</small></h1>
            <ul className="list-unstyled mt-3 mb-1">
              <li>4 rs per Day</li>
              <li>2000 boxes of storage</li>
              <li>Email support</li>              
              <li>Help center access</li>
            </ul>
             </div>
        </div>
        <div className="col-4 m-3 card mb-4 rounded-3 shadow-sm bg-dark text-light">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Non-Ac</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">60<small className="text-body-secondary fw-light">/months</small></h1>
            <ul className="list-unstyled mt-3 mb-1">
              <li>2 rs per day</li>
              <li>2000 toners of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            </div>
        </div>


        {/* features start */}
        <div className="features">
            
        </div>
        {/* features start */}

        
    </div>
    {/* cards End */}
    <Footer/>



   </div>
   
   
   </>
  )
}

export default Home