import React from "react";
import { NavLink } from "react-router-dom";
import web1 from "../src/images/img1.jpg";

const Home =()=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg"
               style={ {
                backgroundColor: '#ffbcbc',
            }}
        >
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1
                  style={{
                    color: '#000000',
                    fontFamily:'monospace',
                    }}
            >Learning how to play the guitar can be a rewarding and fulfilling experience.</h1>
            <h2 className="mt-3"
                  style={{
                    color: '#ff7300',
                    fontFamily:'cursive',
                    }}
            >Learn to play guitar tabs, chords, scales, strumming patters and hindi songs here!!</h2>
            <div className="mt-3">
                <NavLink to="/list2">Start Learning</NavLink>
            </div>
            <h4
                  style={{
                    color: '#c79903',
                    fontFamily:'monospace',
                    }}
            >The beautiful thing about learning is nobody can take it away from you.</h4>
        </div>

            <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web1} className="img-fluid" alt="home img"/>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>
        </>
        );
};

export default Home;