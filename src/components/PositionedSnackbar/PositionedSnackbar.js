import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SaveIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  

class PositionedSnackbar extends React.Component {
    
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'right',
  };

  handleClick = () => {
    this.setState({ ...this.state, open: true });
    this.props.clicked()
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
        <React.Fragment>
        <ListItem button>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <ListItemText onClick={this.handleClick} primary="Save Game" />
      </ListItem>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Game was saved</span>}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PositionedSnackbar);