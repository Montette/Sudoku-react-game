import React from 'react';
import PositionedSnackbar from '../Material-ui/PositionedSnackbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

const Nav = (props) => {
    const { classes } = props;
    return (
        <div>
            <Button variant="raised" color="primary" size="small" className={classes.button}onClick={props.check}>Check</Button>
            <Button variant="raised" color="primary" size="small" className={classes.button}onClick={props.newGame}>New Game</Button>
            <Button variant="raised" color="primary" size="small" className={classes.button}onClick={props.solve}>Solve</Button>
            <Button variant="raised" color="primary" size="small" className={classes.button}onClick={props.restart}>Restart</Button>
            <Button variant="raised" color="primary" size="small" className={classes.button}onClick={props.showModal}>Difficulty</Button>
            <PositionedSnackbar clicked={props.saveGame}/>
            <Button variant="raised" color="primary" size="small" className={classes.button}onClick={props.loadGame}>Load</Button>
        </div>

    )
}

export default withStyles(styles)(Nav);