import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';

const Board = (props) => {

    let fields = props.fields.map((field, index) => <Tile key={index} content={field} changeNumber={(event)=>props.changeNumber(event, index)}/>)
    return (
        <div className='board-container'>
        {fields}
        </div>
    )
}










export default Board