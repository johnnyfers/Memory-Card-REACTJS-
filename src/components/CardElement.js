import React from 'react';

export default function CardElement(props){
    return (
        <div onClick={()=>props.handleFlip(props.card)} id={props.card.id} className={`card ${props.card.flipped?"flip":""}`}>
            <div className="card-front">
                <img className="icon" src={`./assets/${props.card.icon}.png`}></img>
            </div>
            <div className="card-back" >
            <img className="icon" src={'./assets/pokeball.png'}></img>
            </div>
        </div>
    )
}