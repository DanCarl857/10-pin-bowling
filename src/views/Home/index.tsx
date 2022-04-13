import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import { fillRolls } from '../../utilities/fillRolls';
import './home.css';

export function Home() {
    const [pins, setPins] = useState(fillRolls(10));
    const [frames, setFrames] = useState([
        {0: [4, 6, 4]},
        {1: [4, 6, 4]},
        {2: [4, 6, 4]},
        {3: [4, 6, 4]},
        {4: [4, 6, 4]},
        {5: [4, 6, 4]},
        {6: [4, 6, 4]},
        {7: [4, 6, 4]},
        {8: [4, 6, 4]},
        {9: [4, 6, 4]},
    ]);

    useEffect(() => {
        console.log(pins);
    }, []);

    return (
        <div className="main">
            <Container>
                <h2>10 Pin Bowling score card</h2>
                <hr />

                <div className="pin-container">
                    <h4>Possible Pins to Knock down</h4>
                    {pins.map((pin, index) => {
                        return (
                            <Button variant="primary" className="roll-btn">
                                <span key={index}>{pin}</span>
                            </Button>
                        )
                    })}
                </div>

                <div className="score-container">
                    <h4>Frame Scores</h4>
                    <div className="scores">
                        {frames.map((frame, index) => {
                            return (
                                <div className="score-item">
                                    <p className="box">
                                        <h6>Rolls</h6>
                                        <span>4, 6</span>
                                    </p>
                                    <p className="box">
                                        <h6>Frame Score</h6>
                                        <span>45</span>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
};
