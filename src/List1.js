import React from "react";
import Songimg1 from "./Songimg1";
import Card from "./Card";

const list1 =()=>{
    return(
        <>
        <div className="my-5">
            <h2 className="text-center"
            style={ {
                color:'#67f87f',
                fontFamily:'cursive',
            }}
            >Bollywood Chords Solution List</h2>
        </div>
        <div className="container-fluid mb-5"
               style={ {
                backgroundColor: '#67f87f',
            }}
        >
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                Songimg1.map((val, ind)=>{
                    return <Card key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     text={val.text}
                     Link={val.Link}
                    />
                })
            }
        </div>
        </div>
        </div>  
        </div>
        </>
        );
};

export default list1;