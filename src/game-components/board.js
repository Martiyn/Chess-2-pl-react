import React from 'react';

import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

    renderSquare(m, squareShade) {
        return <Square 
        key={m}
        keyVal={m}
        style={this.props.squares[m] ? this.props.squares[m].style : null}
        shade={squareShade}
        onClick={() => this.props.onClick(m)}
        />
    }

    render() {
        const board = [];
        for (let m=0; m<8; m++) {
            const squareRows = [];
            for (let n=0; n<8; n++) {
                const squareShade = (isEven(m) && isEven(n)) || (!isEven(m) && !isEven(n)) ? "light-square" : "dark-square";
                squareRows.push(this.renderSquare((m*8) + n, squareShade));
            }
            board.push(<div className="board-row" key={m}>{squareRows}</div>)
        }
        return (
            <div>
                {board}
            </div>
        );
    }
}

function isEven(num) {
    return num % 2 === 0
}