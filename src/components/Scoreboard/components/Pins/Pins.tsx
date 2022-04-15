import React from 'react';
import { Button } from 'react-bootstrap';
import { fillRolls } from '../../../../utilities/fillRolls';

import './pins.css'

type OwnProps = {
    onRoll: Function,
    pinsStanding: number
};

type Props = OwnProps;

export function Pins ({
    onRoll,
    pinsStanding
}: Props) {
    return (
        <div className="pin-container">
            <h4>Possible Pins to Knock down</h4>
            <div>
                {fillRolls(pinsStanding + 1).map((o, i) => (
                    <Button variant="primary" className="roll-btn" key={i} onClick={() => onRoll(i)}>
                        {i}
                    </Button>
                ))}
            </div>
        </div>
    )
}
