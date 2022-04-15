import { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

import { BowlingGame } from '../../common/BowlingGame/BowlingGame';
import * as CP from './components';

export function Scoreboard () {
    let game = useRef(BowlingGame.create());
    const [score, setScore] = useState(game.current.score());

    const play = (pinsKnockedDown: number) => {
        game.current.play(pinsKnockedDown);
        let tempScore = game.current.score();
        setScore(tempScore);
    };

    const resetGame = () => {
        game.current.resetGame();
        setScore(game.current.score());
    };

    const pinsStanding = () => game.current.pinsStanding();

    return (
        <>
            <CP.Pins onRoll={play} pinsStanding={pinsStanding()} />
            <div className="score-container">
                <h4>Frame Scores</h4>
                <CP.FrameList score={score} />
                <hr />
                <Button onClick={resetGame} variant="primary">
                    Start A New Game
                </Button>
            </div>
        </>
    )
};
