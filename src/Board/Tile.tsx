function Tile(props) {
    if (props.isSand) {
        return (
            <div className="hex sand">
                </div>
        );
    } else {
        return (
            <div>
                <div className={`hex ${props.type}`}>
        <div className="dice-number">
            {props.diceValue}
        </div>
        </div>
        </div>

    );
    }

}