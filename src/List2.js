import React from "react";
import Songimg1 from "./Songimg2";
import Card from "./Card";

const List2 =()=>{
    return(
        <>
        <div className="my-5">
            <h2 className="text-center"
            style={ {
                color:'#8caafd',
                fontFamily:'cursive',
            }}
            >Learn to play Guitar here easily!!</h2>
        </div>
        <div className="container-fluid mb-5"
               style={ {
                backgroundColor: '#8caafd',
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

export default List2;