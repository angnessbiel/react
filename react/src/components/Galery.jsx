import React from 'react';
import ItemImg from './ItemImg';
import TextBig from './TextBig';


export default function Galery(){
    return(
        <div className="one-column content">
           <img src="../public/1.jpg" alt="" />
           <img src="../public/2.jpg" alt="" />
           <img src="../public/3.jpg" alt="" />
        
            <div className="inner-container">
            <img src="../public/4.jpg" alt="" />
           <img src="../public/5.jpg" alt="" />
           <img src="../public/6.jpg" alt="" />
                </div>
        </div>
    )
}