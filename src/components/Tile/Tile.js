
import React from 'react';
import classes from './Tile.css';

const Tile = (props) => {
    let value = props.content === '.'?'':props.content;
    // let initialss = [...props.initials];
    let inputClasses = [classes.field];
    // initialss.forEach(number => {
    //     if (number === '5') {
    //         inputClasses.push(classes.initial)
    //     }
    // })
    if (value === '') {
        inputClasses.push(classes.empty)
    }

    // if (props.fieldClicked) {
    //     inputClasses.push(classes.clicked)
    // }
    let a;
    if (props.initials[props.indexNumber] === '.') {
        if (value !== '') {
            inputClasses.push(classes.clicked)
        }
        a = (
            <input className = {inputClasses.join(' ')} value={value} type='number' max='9' min='1' onChange={(event)=>props.changeNumber(event)} />
        ) 
    } else {
        inputClasses.push(classes.textField)
      
        a = ( <input className = {inputClasses.join(' ')} value={value} type='text'  />)
        
    }
   
    return (
        <div className={classes.fieldsWrapper}>
         {a}
         </div>
    )
}

export default Tile