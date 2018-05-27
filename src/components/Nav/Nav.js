import React from 'react';

const Nav = (props) => {
    return (
        <div>
            <button onClick={props.check}>Check</button>
            <button onClick={props.newGame}>New Game</button>
            <button onClick={props.solve}>Solve</button>
            <button onClick={props.restart}>Restart</button>
        </div>

    )
}

export default Nav