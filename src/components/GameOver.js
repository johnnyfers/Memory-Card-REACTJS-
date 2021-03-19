import React, { Fragment, useState } from 'react';

export default  function GameOver(props) {


    return (props.show?
        <div id="gameOver">
            <div>Congratulations! You Won this Game</div>
            <div>
                <button onClick={props.onRestart}>Play Again</button>
            </div>
        </div> : <Fragment />
    )
}

