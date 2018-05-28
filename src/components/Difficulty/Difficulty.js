import React, {Component} from 'react';
import classes from './Difficulty.css';

class Difficulty extends Component {
    // constructor(props) {
    //     super(props)
    //     this.difficultyHandler = this.difficultyHandler.bind(this)
    //   }
    state = {
        difficulty: ''
    }

    difficultyHandler = (event)=> {
   
        this.setState({
            difficulty: event.target.value
        })
    }

    // difficultyHandlerForm = (event)=> {
    //     event.preventDefault();
    //     this.state.checked
    // }
    handleCancel =()=> {
        this.props.handleClose()
    }
    handleSave =()=> {
        this.props.changeDifficulty(this.state.difficulty);
        this.handleCancel()
    }
    render(){
     
        
    const showHideClass = [classes.modal];
    this.props.show
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
                            onChange={this.difficultyHandler}
                            checked={this.state.difficulty === 'easy'}/>
                            Easy
                    </label>
                    <label><input
                        type="radio"
                        value="medium"
                        onChange={this.difficultyHandler}
                        checked={this.state.difficulty === 'medium'}/>
                        Medium
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="hard"
                            onChange={this.difficultyHandler}
                            checked={this.state.difficulty === 'hard'}/>
                            Hard
                    </label>

                    <label><input
                        type="radio"
                        value="very-hard"
                        onChange={this.difficultyHandler}
                        checked={this.state.difficulty === 'very-hard'}/>
                        Very hard
                    </label>

                    <label> <input
                        type="radio"
                        value="insane"
                        onChange={this.difficultyHandler}
                        checked={this.state.difficulty === 'insane'}/>
                        Insane
                    </label>
                    <label> <input
                        type="radio"
                        value="inhuman"
                        onChange={this.difficultyHandler}
                        checked={this.state.difficulty === 'inhuman'}/>
                        Inhuman
                    </label>
                </form>
                <button onClick={this.handleCancel}>cancel</button>
                <button  onClick={this.handleSave}>save</button>
            </div>

        </div>

    )}
}

export default Difficulty