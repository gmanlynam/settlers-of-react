import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Player from './Players/player'
function Tile(props) {
    if (props.isSand) {
        return (
            <button className="square sand">
            </button>
        );
    } else {
        return (
            <button className={`square ${props.type}`}>
                {props.diceValue}
            </button>
        );
    }

}

function SeaBorder(props) {
    return (
        <div className={`seaBorder ${props.orientation}`}>
            3:1 Sheep Port
        </div>
    )
}

class Board extends React.Component {
    renderSquare(tileNumber) {
        return (
            <Tile
                diceValue={this.props.tiles[tileNumber].number}
                type={this.props.tiles[tileNumber].type}
                currentRoll={this.props.currentRoll}
            />
        );
    }
    renderSand() {
        return (
            <Tile isSand={true}/>
        );
    }
    render() {
        return (
            <div>
                {this.renderSeaBorder("top-left")}
                {this.renderSeaBorder("top")}
                {this.renderSeaBorder("top-right")}
                {this.renderSeaBorder("left")}


                <div className="hexagons">
                    <div className="top-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="top-middle">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                        {this.renderSquare(6)}
                    </div>
                    <div className="middle">
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                        {this.renderSand()}
                        {this.renderSquare(9)}
                        {this.renderSquare(10)}
                    </div>

                    <div className="bottom-middle">
                        {this.renderSquare(11)}
                        {this.renderSquare(12)}
                        {this.renderSquare(13)}
                        {this.renderSquare(14)}
                    </div>

                    <div className="bottom-row">
                        {this.renderSquare(15)}
                        {this.renderSquare(16)}
                        {this.renderSquare(17)}
                    </div>
                </div>
                {this.renderSeaBorder("right")}
                {this.renderSeaBorder("bottom-left")}
                {this.renderSeaBorder("bottom")}
                {this.renderSeaBorder("bottom-right")}
            </div>
        );
    }

    renderSeaBorder(orientation) {
        return (
            <SeaBorder
                orientation={orientation}
                tradingPosts={"3:1 Sheep"}
            />
        );
    }

}

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
    handleClick(i) {
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        onClick={(i) => this.handleClick(i)}
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
        this.state.tiles.forEach(tile => {
            if (tile.number === roll) {
                this.setState({
                    player: {
                        cards: this.state.player.cards.concat([tile.type])
                    }
                });
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
