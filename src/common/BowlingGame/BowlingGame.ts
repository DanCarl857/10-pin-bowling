// Initial logic implementation logic from 
//  RedGreenRefactor: https://www.youtube.com/watch?v=brahHchaegc
//  dearfrankg: https://www.github.com/dearfrankg
import { ScoreDataType } from "../../types";
import * as CONSTANTS from '../../constants';
import { fillRolls } from "../../utilities/fillRolls";
import * as BGUTILS from '../../utilities';

export class BowlingGame {
    private readonly NUMBER_OF_PINS: number = 10;
    private rolls: number[] = [];
    private currentRoll: number;

    constructor () {
        this.rolls = [];
        this.currentRoll = 0;
    }

    static create = () => new BowlingGame();

    play = (pins: number) => (this.rolls[this.currentRoll++] = pins);

    resetGame = () => {
        this.rolls = [];
        this.currentRoll = 0;
    };

    pinsStanding = () => {
        const scoreData: ScoreDataType[] | undefined = this.score();
        let pinsStanding = CONSTANTS.PIN_TOTAL;
        
        if (scoreData) {
            scoreData.forEach(score => {
                if (score.pinsStanding !== null && !isNaN(score.pinsStanding)) {
                    pinsStanding = score.pinsStanding;
                }
            });
        }
        return pinsStanding;
    };

    score = (): ScoreDataType[] => {
        let scoreData: ScoreDataType[] = [];
        let score = 0;
        let frameIndex = 0;

        const roll1 = () => this.rolls[frameIndex];
        const roll2 = () => this.rolls[frameIndex + 1];
        const roll3 = () => this.rolls[frameIndex + 2];

        const recordFrame = (scoreData: ScoreDataType[], firstRoll: number | string, secondRoll: number | string, score: number, pinsStanding: number) => {
            if (scoreData.length < 9) {
                scoreData.push({
                  firstRoll,
                  secondRoll,
                  totalScore: score,
                  pinsStanding
                });
            } else {
                const box1 = roll1() === this.NUMBER_OF_PINS ? "X" : roll1();
                const box2 = roll2() === this.NUMBER_OF_PINS ? "X" : BGUTILS.isSpare(roll1(), roll2()) ? "/" : roll2();
                let box3;
                if (BGUTILS.isStrike(roll3())) {
                  box3 = "X";
                } else if (roll1() === this.NUMBER_OF_PINS || roll1() + roll2() === this.NUMBER_OF_PINS) {
                  box3 = roll3();
                } else {
                  box3 = "";
                }
        
                scoreData.push({
                  firstRoll: box1,
                  secondRoll: box2,
                  totalScore: score,
                  pinsStanding,
                  extraRoll: box3
                });
              }
        };

        fillRolls(this.NUMBER_OF_PINS).forEach((_) => {
            if (BGUTILS.isStrike(roll1())) { // strike logic
                score += BGUTILS.strikeBonus(roll2(), roll3());
                recordFrame(scoreData, "", "X", score, this.NUMBER_OF_PINS);
                frameIndex++;
              } else if (BGUTILS.isSpare(roll1(), roll2())) { // spare logic
                score += BGUTILS.spareBonus(roll3());
                recordFrame(scoreData, roll1(), "/", score, this.NUMBER_OF_PINS);
                frameIndex += 2;
              } else { // normal roll
                score += BGUTILS.sumOfRollsInFrame(roll1(), roll2());
                const pinsStanding = roll2() !== undefined ? this.NUMBER_OF_PINS : this.NUMBER_OF_PINS - roll1();
                recordFrame(scoreData, roll1(), roll2(), score, pinsStanding);
                frameIndex += 2;
              }
        });

        return scoreData;
    }
};
