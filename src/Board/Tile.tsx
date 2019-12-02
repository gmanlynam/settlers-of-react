import React, { Component }  from 'react';
export default function Tile(props: any) {
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