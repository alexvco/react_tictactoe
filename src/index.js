import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

// React supports a simpler syntax called functional components for component types like Square that only consist of a render method. Rather than define a class extending React.Component, simply write a function that takes props and returns what should be rendered.

    // function Square(props) {
    //   return (
    //     <button className="square" onClick={props.onClick}>
    //       {props.value}
    //     </button>
    //   );
    // }

// Note that onClick={props.onClick()} would not work because it would call props.onClick immediately instead of passing it down.



class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    // We call .slice() to copy the squares array instead of mutating the existing array. 
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext // Now X and O take turns, by togglings the xIsNext state between true and false
    });
  }

  renderSquare(i) {
    return <Square value={ this.state.squares[i] } onClick={ () => this.handleClick(i) } />;
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
