import React from 'react';
import { BowlingGame } from '../BowlingGame';

let game: BowlingGame;

beforeEach(() => {
    game = new BowlingGame();
})

describe('Bowling Game', () => {
    it('should return 0 for a game of all zeroes', () => {
        playManyTimes(0, 20);
        expect(game.score()[9].totalScore).toEqual(0);
    });

    it ('should return 300 for a game of all strikes', () => {
        playManyTimes(10, 20);
        expect(game.score()[9].totalScore).toEqual(300);
    });

    it('should return the correct score when a spare is rolled', () => {
        game.play(5);
        game.play(5);
        game.play(3);
        playManyTimes(0, 17);

        expect(game.score()[9].totalScore).toEqual(16);
    });

    it('should return the correct score when a strike is rolled', () => {
        game.play(10);
        game.play(1);
        game.play(1);
        game.play(1);
        playManyTimes(0, 17);

        expect(game.score()[9].totalScore).toEqual(15);
    })
})

function playManyTimes(pins: number, rolls: number) {
    for (let index = 0; index < rolls; index++) {
        game.play(pins);
    }
}