import React from "react";
import web1 from "../src/images/img1.jpg";
import web3 from "../src/images/img3.jpg";

const Contact =()=>{
    return(
        <>
        <div className="container-fluid nav_bg"
               style={ {
                backgroundColor: '#f18bff',
            }}
        >
        <div className="row gy-4">
        <div className="col-10 mx-auto pt-5"></div>

    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <div class="card" style={{width:'18rem'}}>
    <img src={web3} class="card-img-top" alt="instagram img" />
    <div class="card-body">
    <h5 class="card-title">Instagram</h5>
    <p class="card-text">You can DM me on my instagram page. Just CLICK the below button.</p>
    <a href="https://instagram.com/royat9422?utm_medium=copy_link" class="btn btn-outline-warning">My Instagram Page</a>
    </div>
    </div>
    </div>

    <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web1} className="img-fluid" alt="home img"/>
            </div>

      </div>
      </div>
        </>
        );
};

export default Contact;