import React from 'react';

import { Frame } from '../Frame/Frame';
import { fillRolls } from '../../../../utilities/fillRolls';
import { ScoreDataType } from '../../../../types';
import './framelist.css';

type OwnProps = {
    score: ScoreDataType[]
};

type Props = OwnProps;

export function FrameList ({ score }: Props) {
    return (
        <div className="scores">
            {fillRolls(10).map((_, frameIndex) => (
                <Frame
                    key={frameIndex}
                    firstRoll={score[frameIndex].firstRoll}
                    secondRoll={score[frameIndex].secondRoll}
                    extraRoll={score[frameIndex].extraRoll}
                    score={score[frameIndex].totalScore}
                />
            ))}
        </div>
    )
}