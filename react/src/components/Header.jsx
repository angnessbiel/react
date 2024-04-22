import React from 'react';
import Navbar from './Navbar';


export default function Header(){
    return(
        <header className='header container'>
            <div className="logo">
            <div className="logo">
                <img src="../public/senai.png" alt="" />
            </div>
                
            </div>
            <Navbar />
        </header>
    )
}