import React, {Component} from 'react';
import './App.css';
import Board from '../components/Board/Board';
import Nav from '../components/Nav/Nav';
import sudoku from 'sudoku-umd';

let sudokuBoard = sudoku.generate('easy');

class App extends Component {
    state = {
        initialBoard: sudokuBoard,
        board: sudokuBoard
    }

    changeNumber = (event, index) => {
        let updatedBoard = [...this.state.board];
        updatedBoard[index] = event.target.value;
        if (this.state.initialBoard[index] === '.') {
            this.setState({
                board: updatedBoard.join('')
            });
            console.log(updatedBoard[index])
        };
        console.log(updatedBoard[index])

    }
    render() {
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <Board fields={[...this.state.board]} changeNumber={this.changeNumber}/>
                <Nav/>
            </div>
        );
    }
}

export default App;
