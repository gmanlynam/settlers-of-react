import Node from "./Node";
import Connector from "./Connector";
import * as React from "react";
import SeaBorder from "./SeaBorder";
import Tile from "./Tile"
interface BoardProps {
    tiles: any
    currentRoll: any
}
export default class Board extends React.Component<BoardProps> {

    nodes: Map<number, Node> = new Map;

    constructor(props: BoardProps) {
        super(props)
    }

    componentDidMount() {
        let one = new Node();
        let two = new Node();
        let three = new Node();
        one.setSiblings([two, three]);
        one.setConnectors([new Connector({}, two), new Connector({}, three)]);
        this.nodes.set(0, one);
    }
    renderSquare(tileNumber: number) {
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
                <div className="hexagon">
            <div className="hex-row one">
                {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="hex-row even two">
            {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        </div>
        <div className="hex-row three">
            {this.renderSquare(7)}
        {this.renderSquare(8)}
        {this.renderSand()}
        {this.renderSquare(9)}
        {this.renderSquare(10)}
        </div>

        <div className="hex-row even four">
            {this.renderSquare(11)}
        {this.renderSquare(12)}
        {this.renderSquare(13)}
        {this.renderSquare(14)}
        </div>

        <div className="hex-row five">
            {this.renderSquare(15)}
        {this.renderSquare(16)}
        {this.renderSquare(17)}
        </div>
        </div>
        </div>
    );
    }

    renderSeaBorder(orientation: any) {
        return (
            <SeaBorder
                orientation={orientation}
                tradingPosts={"3:1 Sheep"}
            />
    );
    }

}
