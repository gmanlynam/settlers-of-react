import React from "react";

export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Player has:
                <div>
                    {this.props.player.cards[0]}
                </div>
            </div>
        )

    }
}