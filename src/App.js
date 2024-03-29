import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    }
    this.winnerLines = [
      [0, 1, 2],
      [4, 5, 6],
      [7, 8, 9],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? 'X' : 'O';
    for (let index = 0; index < 8; index++) {
      const line = this.winnerLines[index];
      if (this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s) {
        alert(s + 'Winner');
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) })
          this.setState({ count: 0 })
        }, 3000)
      }
    }
  }

  clickHandler = (e) => {
    let data = e.target.getAttribute('data');
    let currentSquare = this.state.squares;
    if (currentSquare[data] === null) {
      currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
      this.setState({ count: this.state.count + 1 })
      this.setState({ squares: currentSquare });
    } else {
      alert(' Select another square')
    }

    this.isWinner();
  }


  render() {
    return (
      <div className="tic-tac-toe" >
        <div className='ttt-grid' onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
        <div className='ttt-grid' onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
      </div>
    );
  }
}

export default App;
