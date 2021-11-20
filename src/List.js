import React from "react";
import Songimg from "./Songimg";
import Card from "./Card";

const List =()=>{
    return(
        <>
        <div className="my-5">
            <h2 className="text-center"
            style={ {
                color:'#f6f867',
                fontFamily:'cursive',
            }}
            >Bollywood Tabs Solution List</h2>
        </div>
        <div className="container-fluid mb-5"
               style={ {
                backgroundColor: '#f6f867',
            }}
        >
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                Songimg.map((val, ind)=>{
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

export default List;