import React from 'react';

const Difficulty = (props) => {
    return (
        <form>
            <input
                type="radio"
                value="easy"
                onChange={props.changeDifficulty}
                checked={props.difficulty === 'easy'}/>
            Easy
            <input
                type="radio"
                value="medium"
                onChange={props.changeDifficulty}
                checked={props.difficulty === 'medium'}/>
            Medium
            <input
                type="radio"
                value="hard"
                onChange={props.changeDifficulty}
                checked={props.difficulty === 'hard'}/>
            Hard
            <input
                type="radio"
                value="very-hard"
                onChange={props.changeDifficulty}
                checked={props.difficulty === 'very-hard'}/>
            Very Hard
            <input
                type="radio"
                value="insane"
                onChange={props.changeDifficulty}
                checked={props.difficulty === 'insane'}/>
            Insane
            <input
                type="radio"
                value="inhuman"
                onChange={props.changeDifficulty}
                checked={props.difficulty === 'inhuman'}/>
            Inhuman
        </form>

    )
}

export default Difficulty