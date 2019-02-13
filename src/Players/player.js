import React from "react";

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settlements: 5,
            cities: 4,
            roads: 10,
        }
    }

    render() {
        return (
            <div>
                Player has:
                <div>
                    {this.state.settlements} Settlements
                </div>
                <div>
                    {this.state.cities} Cities
                </div>
                <div>
                    {this.state.roads} Roads
                </div>
                <div>
                    <div>Card Type:
                        {this.props.player.cards.map(card => (
                            <div> {card} </div>
                        ))}
                    </div>
                </div>
            </div>
        )

    }
}