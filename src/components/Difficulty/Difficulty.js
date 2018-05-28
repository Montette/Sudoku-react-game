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
                    <label>
                        <input
                            type="radio"
                            name='easy'
                            value="easy"
                            onChange={props.changeDifficulty}
                            checked={props.difficulty === 'easy'}/>
                            Easy
                    </label>
                    <label><input
                        type="radio"
                        value="medium"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'medium'}/>
                        Medium
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="hard"
                            onChange={props.changeDifficulty}
                            checked={props.difficulty === 'hard'}/>
                            Hard
                    </label>

                    <label><input
                        type="radio"
                        value="very-hard"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'very-hard'}/>
                        Very hard
                    </label>

                    <label> <input
                        type="radio"
                        value="insane"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'insane'}/>
                        Insane
                    </label>
                    <label> <input
                        type="radio"
                        value="inhuman"
                        onChange={props.changeDifficulty}
                        checked={props.difficulty === 'inhuman'}/>
                        Inhuman
                    </label>
                </form>
                <button onClick={props.handleClose}>close</button>
            </div>

        </div>

    )
}

export default Difficulty