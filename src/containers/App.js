import React, {Component} from 'react';
import classes from './App.css';
import Board from '../components/Board/Board';
import Nav from '../components/Nav/Nav';
import Difficulty from '../components/Difficulty/Difficulty';
import sudoku from 'sudoku-umd';

let sudokuBoard = sudoku.generate('easy');

class App extends Component {
    state = {
        initialBoard: sudokuBoard,
        board: sudokuBoard,
        difficulty: 'easy',
        checkClicked: false,
        showModal: false,
    }

    changeNumberHandler = (event, index) => {
        let updatedBoard = [...this.state.board];
        updatedBoard[index] = event.target.value;
       
            this.setState({
                board: updatedBoard.join(''),
                checkClicked: false,

            });

        
    }

    newGameHandler = () => {
        let sudokuBoard = sudoku.generate(this.state.difficulty);
        this.setState({initialBoard: sudokuBoard, board: sudokuBoard, checkClicked: false})
    }

    restartHandler = () => {
        let restartFields = this.state.initialBoard;
        this.setState({board: restartFields, checkClicked: false})
    }

    solveHandler = () => {
        if (!(sudoku.solve(this.state.board))) {
            // prompt("źle")
            this.setState({checkClicked: true})
        } else {
            this.setState({
                board: sudoku.solve(this.state.board)
            })
        }

    }

    checkHandler = () => {
        //   let solve_sudoku   if (!(sudoku.solve(this.state.board))) {     return
        // solve_sudoku = 'This sudoku can be solved'   } else {     alert("dobrze")
        //  return solve_sudoku = 'This sudoku can not be solved' }
        this.setState({checkClicked: true})
        // return let solve_sudoku = sudoku.solve(this.state.board) ? 'This sudoku can
        // be solved' : 'This sudoku can not be solved';
    }

    handleDifficulty = (e) => {
      this.setState({
          difficulty: e.target.value,
          // showModal: false
      });
      this.newGameHandler()
  }

    showModal = () => {
    this.setState({ showModal: true });
    };

    closeModal = () => {
      this.setState({ showModal: false });
      };


    render() {
        let solve_sudoku = null;
        if (this.state.checkClicked) {
            solve_sudoku = sudoku.solve(this.state.board)
                ? (<div><p>This sudoku can be solve</p></div>)
                : (<div><p>This sudoku can not be solved</p></div>);
        }
        return (
            <div className={classes.App}>
                <h1>Sudoku</h1>
                <Board fields={[...this.state.board]} changeNumber={this.changeNumberHandler}
                initialNumbers = {this.state.initialBoard}/>
                <Nav
                    check={this.checkHandler}
                    newGame={this.newGameHandler}
                    solve={this.solveHandler}
                    restart={this.restartHandler}
                    showModal={this.showModal}/>
                    
                
                    {solve_sudoku}
               
                <Difficulty
                show={this.state.showModal}
                difficulty={this.state.difficulty}
                changeDifficulty={this.handleDifficulty}
                handleClose = {this.closeModal}
                />
            </div>
        );
    }
}

export default App;
