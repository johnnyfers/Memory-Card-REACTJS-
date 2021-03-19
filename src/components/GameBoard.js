import React from 'react';
import CardElement from './CardElement';

export default function GameBoard(props){
    return (
        <div id="gameboard">
            {props.cards.map((card,index)=>
                <CardElement handleFlip={props.handleFlip} key={index} card={card}></CardElement>
            )}
    
        </div>
    )
}