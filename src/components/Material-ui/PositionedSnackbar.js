import React from 'react';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {
  state = {
    open: false,
    vertical: null,
    horizontal: null,
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
    this.props.clicked()
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal, open } = this.state;
    return (
        <React.Fragment>
        <button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          Save
        </button>
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

export default PositionedSnackbar;