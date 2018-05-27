import React from 'react';
import classes from './Tile.css';

const Tile = (props) => {
    let value = props.content === '.'?'':props.content;
    return (
        
         <input className = {classes.field} value={value} type='number' max='9' min='1' onChange={(event)=>props.changeNumber(event)} />
        
    )
}

export default Tile