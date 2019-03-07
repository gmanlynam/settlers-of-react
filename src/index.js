import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Player from './Players/player'
import Board from './Board/Board'
function generateTiles() {
    let tileArr = [];
    for (let  i=0; i < 18; i++) {
        let type = getType();
        let number = Math.ceil(Math.random() * 12);
        tileArr.push({
            type: type,
            number: number
        });
    }
    return tileArr;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: generateTiles(),
            player: {
                cards: []
            }
        };
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        tiles={this.state.tiles}
                        currentRoll={this.state.currentRoll}
                    />
                </div>
                <div className="game-info">
                    <button onClick={() => this.handleRoll()}>Roll</button>
                    <div>Current roll: {this.state.currentRoll}</div>
                    Player one info
                    <Player
                        player={this.state.player}
                    />
                </div>
            </div>
        );
    }

    handleRoll() {
        const roll = Math.ceil(Math.random() * 6);
        this.setState({currentRoll: roll});
        const newCards = [];
        this.state.tiles.forEach(tile => {
            if (tile.number === roll) {
                newCards.push(tile.type);
            }
        });
        this.setState({
            player: {
                cards: this.state.player.cards.concat(newCards)
            }
        })
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function getType() {
    const types = ["grass", "stone", "brick", "hay", "sheep"];
    return types[Math.floor(Math.random() * 5)];
}
