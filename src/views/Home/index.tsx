import React from 'react';
import { Container } from 'react-bootstrap';

import './home.css';
import { Scoreboard } from '../../components';

export function Home() {

    return (
        <div className="main">
            <Container>
                <h2>10 Pin Bowling score card</h2>
                <hr />
                <Scoreboard />
            </Container>
        </div>
    );
};
