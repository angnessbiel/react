import React from 'react';
import TextBig from './TextBig';
import Button from './Button';


export default function Banner(){
    return(
        <div className='banner container'>
            <div className="two-column content">
                <div className="inner-content">
                    <TextBig label="Dia da familia"/>
                    <p>SESI</p>
                    <h5>Venha comemorar com a gente o dia da familia</h5>
                <h6>Data:20/04    Horario:9:00 </h6>
                <h8>Escola Sesi</h8>
                </div>
            </div>
            <div className="two-column content">
                <img src="primeira1.png" alt="" />
            </div>
        </div>
    )
}