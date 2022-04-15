import React from 'react';

import './frame.css';

type OwnProps = {
    firstRoll: number | string,
    secondRoll: number | string,
    extraRoll?: number | string,
    score: number
};

type Props = OwnProps;

export function Frame ({
    firstRoll,
    secondRoll,
    extraRoll,
    score
}: Props) {
    return (
        <div className="score-item">
            <div className="box">
                <div>Rolls</div>
                <span>{firstRoll}&nbsp;</span>
                <span>-</span>
                <span>&nbsp;{secondRoll}</span>
                <span>{extraRoll}</span>
            </div>
            <div className="box">
                <div>Frame Score</div>
                <span>{!isNaN(score) && score}</span>
            </div>
        </div>
    )
};
