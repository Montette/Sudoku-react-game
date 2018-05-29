import React from 'react';
import PositionedSnackbar from '../Material-ui/PositionedSnackbar'

const Nav = (props) => {
    return (
        <div>
            <button onClick={props.check}>Check</button>
            <button onClick={props.newGame}>New Game</button>
            <button onClick={props.solve}>Solve</button>
            <button onClick={props.restart}>Restart</button>
            <button onClick={props.showModal}>Difficulty</button>
            <PositionedSnackbar clicked={props.saveGame}/>
            <button onClick={props.loadGame}>Load</button>
        </div>

    )
}

export default Nav