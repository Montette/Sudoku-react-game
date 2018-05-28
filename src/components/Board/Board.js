import React from 'react';
import Tile from '../Tile/Tile';
import classes from './Board.css';

const Board = (props) => {

    let fields = props.fields.map((field, index) => <Tile key={index} indexNumber={index}content={field} changeNumber={(event)=>props.changeNumber(event, index)} initials={props.initialNumbers}/>)
    return (
        <div className={classes.boardContainer}>
        {fields}
        </div>
    )
}










export default Board