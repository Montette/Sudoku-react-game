import React from 'react';
import './Tile.css';

const Tile = (props) => {
    let value = props.content === '.'?'':props.content;
    return (
        
         <input className = 'field' value={value} type='number' max='9' min='1' onChange={(event)=>props.changeNumber(event)} />
        
    )
}

export default Tile