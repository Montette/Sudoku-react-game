import React, {Component} from 'react';
import myStyle from './Difficulty.css';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex'
    },
    formControl: {
        margin: theme.spacing.unit * 3,
        display: 'inline-flex'

    },
    group: {
        margin: `${theme.spacing.unit}px 0`
    },
    button: {
        margin: theme.spacing.unit
    }
});

class Difficulty extends Component {

    state = {
        difficulty: 'easy'
    }

    difficultyHandler = (event) => {

        this.setState({difficulty: event.target.value})
    }

    handleCancel = () => {
        this.props.handleClose()
    }
    handleSave = () => {
        this.props.changeDifficulty(this.state.difficulty);
        this.handleCancel()
    }
    
    render() {
        const {classes} = this.props;
        const showHideClass = [myStyle.modal];
        this.props.show
            ? showHideClass.push(myStyle.displayBlock)
            : showHideClass.push(myStyle.displayNone);
        return (
            <div className={showHideClass.join(' ')}>
                <div className={myStyle.modalMain}>
                    <FormControl component="fieldset" required className={classes.formControl}>
                        <FormLabel component="legend">Difficluty level</FormLabel>
                        <RadioGroup
                            aria-label="difficulty"
                            name="difficulty"
                            className={classes.group}
                            value={this.state.difficulty}
                            onChange={this.difficultyHandler}>
                            <FormControlLabel
                                value="easy"
                                control={< Radio color = "primary" />}
                                label="easy"/>
                            <FormControlLabel
                                value="medium"
                                control={< Radio color = "primary" />}
                                label="medium"/>
                            <FormControlLabel
                                value="hard"
                                control={< Radio color = "primary" />}
                                label="hard"/>
                            <FormControlLabel value="very-hard" control={< Radio />} label="very-hard"/>
                            <FormControlLabel
                                value="insane"
                                control={< Radio color = "primary" />}
                                label="insane"/>
                            <FormControlLabel
                                value="inhuman"
                                control={< Radio color = "primary" />}
                                label="inhuman"/>
                        </RadioGroup>
                        <FormHelperText>Remember, that changing difficulty level will restart your game!</FormHelperText>
                    </FormControl>
                    <div>
                        <Button
                            variant="raised"
                            color="primary"
                            size="small"
                            className={classes.button}
                            onClick={this.handleCancel}>cancel</Button>
                        <Button
                            variant="raised"
                            color="primary"
                            size="small"
                            className={classes.button}
                            onClick={this.handleSave}>save</Button>
                    </div>
                </div>
            </div>
        )
    }
}

// export default Difficulty
export default withStyles(styles)(Difficulty);