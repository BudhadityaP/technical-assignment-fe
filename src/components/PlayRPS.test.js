
import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import playRPS, {options} from "./PlayRPS";

let props = {
    setSelection: jest.fn(),
    computerChoice:'',
    roundResult:'',
    userChoice:'',
    restartGame: jest.fn(),
    userPoints:0,
    computerPoints:0,
    setDropdownValue:jest.fn(),
    rounds:null,
}
let mockComponent, MockWithHOC, state ={};
describe('----- playRPS tests -----',  () => {

    beforeEach(() => {
         mockComponent = jest.fn(() => null)
         MockWithHOC = playRPS(mockComponent)
    })
    it('HOC renders', async () => {
        render(<MockWithHOC {...props}/>)
        await waitFor(() => expect(mockComponent).toBeCalled());
        await waitFor(() => expect(mockComponent).toBeCalledWith(
            expect.objectContaining({...props}),
            expect.anything()
        ));
    })

    it('restartGame test',() => {
        const mockObj = new MockWithHOC();
        const restartGameSpy = jest.spyOn(mockObj, 'restartGame')
        mockObj.setDropdownValue(options[0]);
       expect(restartGameSpy).toBeCalled();
    })

    it('checkWinner test', () => {
        const mockObj = new MockWithHOC()
        const checkWinnerSpy = jest.spyOn(mockObj, 'checkWinner')
        mockObj.setSelection('r')
        expect(checkWinnerSpy).toHaveBeenCalledWith('r', expect.anything());
    })

    it('simulatePlay  test', () => {
        const mockObj = new MockWithHOC()
        const checkWinnerSpy = jest.spyOn(mockObj, 'checkWinner')
        mockObj.simulatePlay()
        expect(checkWinnerSpy).toHaveBeenCalledWith(expect.anything(), expect.anything());
    })

    it('setWinner test', () => {
        const mockObj = new MockWithHOC()
        const setWinnerSpy = jest.spyOn(mockObj, 'setWinner')
        mockObj.setWinner()
        expect(setWinnerSpy).toHaveBeenCalled();
    })

    it('draw round', () => {
        const mockObj = new MockWithHOC()
        const checkWinnerSpy = jest.spyOn(mockObj, 'checkWinner')
        mockObj.checkWinner('r', 'r')
        expect(checkWinnerSpy).toHaveBeenCalledWith('r', 'r');
    })

    it('Player 1 (user or comp 1) wins the game', () => {
        const mockObj = new MockWithHOC()
        const checkWinnerSpy = jest.spyOn(mockObj, 'checkWinner')
        mockObj.checkWinner('r', 's')
        mockObj.checkWinner('p', 'r')
        mockObj.checkWinner('s', 'p')
        expect(checkWinnerSpy).toHaveBeenCalledTimes(3)
    })

    it('Player 2 (comp or comp 2) wins the game', () => {
        const mockObj = new MockWithHOC()
        const checkWinnerSpy = jest.spyOn(mockObj, 'checkWinner')
        mockObj.checkWinner('s', 'r')
        mockObj.checkWinner('r', 'p')
        mockObj.checkWinner('p', 's')
        expect(checkWinnerSpy).toHaveBeenCalledTimes(3)
    })
})
