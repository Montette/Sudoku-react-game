import React, {Component} from 'react';
import classes from './App.css';
import Board from '../components/Board/Board';
import Difficulty from '../components/Difficulty/Difficulty';
import sudoku from 'sudoku-umd';
import Nav from '../components/Nav/Nav';
import 'typeface-roboto'

let sudokuBoard = sudoku.generate('easy');

class App extends Component {
    state = {
        initialBoard: sudokuBoard,
        board: sudokuBoard,
        difficulty: 'easy',
        checkClicked: false,
        showModal: false
    }

    changeNumberHandler = (event, index) => {
        let updatedBoard = [...this.state.board];
        updatedBoard[index] = event.target.value;

        this.setState({
            board: updatedBoard.join(''),
            checkClicked: false
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
            this.setState({checkClicked: true})
        } else {
            this.setState({
                board: sudoku.solve(this.state.board)
            })
        }
    }

    checkHandler = () => {
        this.setState({checkClicked: true})
    }

    handleDifficulty = (difficulty) => {
        let sudokuBoard = sudoku.generate(difficulty);
        this.setState({initialBoard: sudokuBoard, board: sudokuBoard, checkClicked: false, difficulty: difficulty})
    }

    showModal = () => {
        this.setState({showModal: true});
    };

    closeModal = () => {
        this.setState({showModal: false});
    };

    saveHandler = () => {
        let actualGame = this.state
        localStorage.setItem('game', JSON.stringify(actualGame))
    }

    loadHandler = () => {
        let myGame = JSON.parse(localStorage.getItem('game'));
        this.setState({
            ...myGame
        })
    }

    render() {
        let solve_sudoku = null;
        if (this.state.checkClicked) {
            solve_sudoku = sudoku.solve(this.state.board)
                ? (
                    <div className={classes.solveText}>
                        <p>You are on the right track. Keep it going!</p>
                    </div>
                )
                : (
                    <div className={classes.solveText}>
                        <p>This sudoku cannot be solved</p>
                    </div>
                );
        }
        return (
            <React.Fragment>
                <Nav
                    check={this.checkHandler}
                    newGame={this.newGameHandler}
                    solve={this.solveHandler}
                    restart={this.restartHandler}
                    showModal={this.showModal}
                    saveGame={this.saveHandler}
                    loadGame={this.loadHandler}/>
                <div className={classes.App}>
                    <h1>Sudoku Game</h1>
                    <Board
                        fields={[...this.state.board]}
                        changeNumber={this.changeNumberHandler}
                        initialNumbers={this.state.initialBoard}/> {solve_sudoku}
                    <Difficulty
                        show={this.state.showModal}
                        difficulty={this.state.difficulty}
                        changeDifficulty={this.handleDifficulty}
                        handleClose={this.closeModal}/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
