import React from 'react';
import classes from './Difficulty.css';

const Difficulty = (props) => {
    const showHideClass = [classes.modal];
    props.show
        ? showHideClass.push(classes.displayBlock)
        : showHideClass.push(classes.displayNone);
    return (
        <div className={showHideClass.join(' ')}>
            <div className={classes.modalMain}>
                <form>
                    <label>Easy
                        <input
                            type="radio"
                            name='easy'
                            value="easy"
                            onChange={props.changeDifficulty}
                            checked={props.difficulty === 'easy'}/>
                    </label>
                    <label>Medium<input
                        type="radio"
                        value="medium"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'medium'}/>
                    </label>
                    <label>Hard
                        <input
                            type="radio"
                            value="hard"
                            onChange={props.changeDifficulty}
                            checked={props.difficulty === 'hard'}/>
                    </label>

                    <label>Very hard<input
                        type="radio"
                        value="very-hard"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'very-hard'}/>
                    </label>

                    <label>Insane <input
                        type="radio"
                        value="insane"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'insane'}/>
                    </label>
                    <label>Inhuman <input
                        type="radio"
                        value="inhuman"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'inhuman'}/>
                    </label>
                </form>
                <button onClick={props.handleClose}>close</button>
            </div>

        </div>

    )
}

export default Difficulty