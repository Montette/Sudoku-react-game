import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import LoadIcon from '@material-ui/icons/CloudDownload';
import RestartIcon from '@material-ui/icons/Cached';
import CheckIcon from '@material-ui/icons/Info';
import SolveIcon from '@material-ui/icons/Visibility';
import DiffIcon from '@material-ui/icons/Build';
import 'typeface-roboto'
import PositionedSnackbar from '../PositionedSnackbar/PositionedSnackbar';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 90,
    paddingLeft: 5,
    paddingBottom: 16,
    marginTop: 0,
    position: 'absolute',
    width: 250,
    top: 0,
    left: 0,
    height: '100vh',
    fontFamily: 'typeface-roboto'
  }),
});

function Nav(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText onClick={props.check} primary="Check you board" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText onClick={props.newGame} primary="New Game" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SolveIcon />
          </ListItemIcon>
          <ListItemText onClick={props.solve} primary="Solve Game" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RestartIcon />
          </ListItemIcon>
          <ListItemText onClick={props.restart} primary="Restart Game" />
        </ListItem>
          </List>
      <Divider />
      <List component="nav">
      <ListItem button>
      <ListItemIcon>
        <DiffIcon />
      </ListItemIcon>
      <ListItemText onClick={props.showModal} primary="Change difficulty level" />
    </ListItem>
    <PositionedSnackbar clicked={props.saveGame} />
     <ListItem button>
      <ListItemIcon>
        <LoadIcon />
      </ListItemIcon>
      <ListItemText onClick={props.loadGame} primary="Load Game" />
    </ListItem>
      </List>
      </Paper>
    </div>
  );
}


export default withStyles(styles)(Nav);
