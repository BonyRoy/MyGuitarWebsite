import React from "react";
import learn1 from "../src/images/learn1.jpg";
import learn2 from "../src/images/learn2.jpg";

const Basic1 =()=>{
    return(
        <>
        <p>
        <img src={learn1} className="img" alt="tab img"/>
        <img src={learn2} className="img" alt="tab img"/>
        </p>
        </>
        );
};

export default Basic1;