/**
 * Created by ebadgio on 7/7/17.
 */
import React from 'react';

function Square(props) {
    console.log('inside', props.style.high,Object.keys(props.style).length > 0  );
    let styler = Object.assign({},squareStyles);
    Object.keys(props.style).length > 0 ? styler['background'] = 'yellow' : null;
    const button = <button className="square" style={styler} onClick={() => props.onClick()}>
        {props.value}
    </button>;
    console.log(button);
    return (
        button
    );
}
var inside = function(self){
    var parents = []
    for (var i=0;i<3;i++){
        var children = []
        for (var j=0;j<3;j++){
            var step = i*3;
            children.push(self.renderSquare(step + j))
        }
        parents.push(<div className="board-row">{children}</div>)
    }
    return parents
}

class Board extends React.Component {
    renderSquare(i) {
        var winners = this.props.winners ? this.props.winners : []
        console.log('here',winners)
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.handleClick(i)}
                style = {(winners.indexOf(i)!==-1 ? {high} : {})}
            />
        );
    }
    render() {
        return (
            <div>
                {inside(this)}
            </div>
        );
    }
}
const style = {
    fontWeight:'bold',
}
const high = {
    backgroundColor:'yellow'
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xisNext: true,
            stepNumber:0,
            descending:true
        };
    }
    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length -1];
        const squares = current.squares.slice();

        if (calculateWinner(squares)[1] || squares[i]) {
            return;
        }
        squares[i] = this.state.xisNext ? 'X' : 'O';
        this.setState({history: history.concat([{
            squares: squares
        }]), stepNumber:history.length,xisNext:!this.state.xisNext});
    }

    jumpTo(move){
        this.setState({stepNumber:move, xisNext:(move%2===0?true:false)})
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winners = calculateWinner(current.squares)[0];
        const winner = calculateWinner(current.squares)[1];

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xisNext ? 'X' : 'O');
        }

        const moves = history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Game start';
            var submit = move===this.state.stepNumber? <a href="#" style={style} onClick={() => this.jumpTo(move)}>{desc}</a> :<a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
            return (
                <li key={move}>{submit}</li>
            );
        });
        let order = this.state.descending ? 'Ascending' : 'Descending';
        let self = this;
        if (!this.state.descending){
            moves.reverse();
        }
        return (
            <div className="game" style={gameStyles}>
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        handleClick={(i) => this.handleClick(i)}
                        winners={winners}
                    />
                </div>
                <div className="game-info" style={gameInfo}>
                    <div>{status}</div>
                    <div>Sort moves: <button onClick={() => {self.setState({descending:!self.state.descending})}}>{order}</button></div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

var calculateWinner = function(board){
    var winners;
    for (var i=0; i<3;i++){
        var pos = i * 3
        if (board[pos]&&board[pos]===board[pos + 1]&&board[pos]===board[pos +2]){
            winners=[pos,pos+1,pos+2]
            return [winners,board[pos]];
        }
        else if (board[i]&&board[i]===board[i + 3]&&board[i]===board[i + 6]){
            winners=[pos,pos+3,pos+6]
            return [winners,board[i]];
        }
    }
    if (board[0]&&board[0]===board[4]&&board[0]===board[8]){
        winners=[0,4,8]
        return [winners,board[0]];
    }
    else if (board[2]&&board[2]===board[4]&&board[2]===board[6]){
        winners=[2,4,6]
        return [winners,board[2]];
    }
    else{
        return [null,null];
    }
};

const squareStyles = {

    'background': 'white',
    'border': '1px solid #999',
    'float': 'left',
    'fontSize': '24px',
    'fontWeight': 'bold',
    'lineHeight': '34px',
    'height': '34px',
    'marginRight': '-1px',
    'marginTop': '-1px',
    'padding': '0',
    'textAlign': 'center',
    'width': '34px'
};

const gameStyles = {
    'display': 'flex',
    'flexDirection': 'row'
};

const gameInfo = {

    'marginLeft': '20px'

}

export default Game;