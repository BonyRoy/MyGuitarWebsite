import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import List from "./List";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Routes ,Route } from 'react-router-dom';
import Song1 from "./Song1";
import Song2 from "./Song2";
import Song3 from "./Song3";
import Song4 from "./Song4";
import Song5 from "./Song5";
import Song6 from "./Song6";
import Song7 from "./Song7";
import Song8 from "./Song8";
import Song9 from "./Song9";
import Song10 from "./Song10";
import List1 from "./List1";
import Song11 from "./Song11";
import Song12 from "./Song12";
import Song13 from "./Song13";
import Song14 from "./Song14";
import List2 from "./List2";
import Basic1 from "./Basic1";
import Basic2 from "./Basic2";
import Basic3 from "./Basic3";
import Song18 from "./Song18";
import Song17 from "./Song17";
import Song15 from "./Song15";
import Song19 from "./Song19";
import Song20 from "./Song20";
import Song21 from "./Song21";
import Song22 from "./Song22";
import Song23 from "./Song23";
import Song24 from "./Song24";
import Song25 from "./Song25";

const App =()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/list" element={<List/>}/>
            <Route path="/list1" element={<List1/>}/>
            <Route path="/list2" element={<List2/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Song1" element={<Song1/>}/>
            <Route path="/Song2" element={<Song2/>}/>
            <Route path="/Song3" element={<Song3/>}/>
            <Route path="/Song4" element={<Song4/>}/>
            <Route path="/Song5" element={<Song5/>}/>
            <Route path="/Song6" element={<Song6/>}/>
            <Route path="/Song7" element={<Song7/>}/>
            <Route path="/Song8" element={<Song8/>}/>
            <Route path="/Song9" element={<Song9/>}/>
            <Route path="/Song10" element={<Song10/>}/>
            <Route path="/Song11" element={<Song11/>}/>
            <Route path="/Song12" element={<Song12/>}/>
            <Route path="/Song13" element={<Song13/>}/>
            <Route path="/Song14" element={<Song14/>}/>
            <Route path="/Basic1" element={<Basic1/>}/>
            <Route path="/Basic2" element={<Basic2/>}/>
            <Route path="/Basic3" element={<Basic3/>}/>
            <Route path="/Song15" element={<Song15/>}/>
            <Route path="/Song17" element={<Song17/>}/>
            <Route path="/Song18" element={<Song18/>}/>
            <Route path="/Song19" element={<Song19/>}/>
            <Route path="/Song20" element={<Song20/>}/>
            <Route path="/Song21" element={<Song21/>}/>
            <Route path="/Song22" element={<Song22/>}/>
            <Route path="/Song23" element={<Song23/>}/>
            <Route path="/Song24" element={<Song24/>}/>
            <Route path="/Song25" element={<Song25/>}/>
        </Routes>
        </>
        );
};

export default App;