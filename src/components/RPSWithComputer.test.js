import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import RPSWithComputer from './RPSWithComputer';
import { BrowserRouter } from "react-router-dom";

let props = {
    setSelection: jest.fn(),
    computerChoice:'',
    roundResult:'',
    userChoice:'',
    restartGame: jest.fn(),
    test:jest.fn(),
    userPoints:0,
    computerPoints:0,
    setDropdownValue:jest.fn(),
    rounds:null,
}
const testRender = (component) => {
    return (render(<BrowserRouter >{component}</BrowserRouter>))
}
let container;
describe('----- RPSWithComputer tests -----', () => {
    beforeEach(() => {
        configure({
            throwSuggestions: true,
        })
       // testRender(<RPSWithComputer {...props} />);
    })

    it('renders correctly - header exists', () => {
        render(<BrowserRouter ><RPSWithComputer {...props} /></BrowserRouter>)
        expect(container).toMatchSnapshot()
        const h1 = screen.getByRole('heading', { name: /Play with Computer/i })
        const label = screen.getByRole('label', { name: /Please select rounds to play/i })
        expect(h1).toBeDefined();
        expect(label).toBeDefined();
    })

    it('renders correctly - buttons exist', () => {
        render(<BrowserRouter ><RPSWithComputer {...props} /></BrowserRouter>)
        const buttonRestart = screen.getByRole('button', { name: /restart/i })
        const buttonRock = screen.getByRole('button', { name: /rock/i })
        const buttonPaper = screen.getByRole('button', { name: /paper/i })
        const buttonScissor = screen.getByRole('button', { name: /scissor/i })
        expect(buttonRestart).toBeDefined();
        expect(buttonRock).toBeDefined();
        expect(buttonPaper).toBeDefined();
        expect(buttonScissor).toBeDefined();
    })

    it('click restart button', () => {
        render(<BrowserRouter><RPSWithComputer {...props} /></BrowserRouter>)
        const buttonRestart = screen.getByRole('button', { name: /restart/i })
        expect(buttonRestart).toBeDefined();
        fireEvent.click(buttonRestart)
        expect(props.restartGame).toHaveBeenCalled()
    })

    it('click Rock Paper Scissor buttons', () => {
        render(<BrowserRouter ><RPSWithComputer {...props} /></BrowserRouter>)
        const buttonRock = screen.getByRole('button', { name: /rock/i })
        const buttonPaper = screen.getByRole('button', { name: /paper/i })
        const buttonScissor = screen.getByRole('button', { name: /scissor/i })
        fireEvent.click(buttonRock)
        fireEvent.click(buttonPaper)
        fireEvent.click(buttonScissor)
        expect(props.setSelection).toHaveBeenCalledTimes(3)
    })

    // it('should display the correct number of options', () => {
    //     const dropDown = screen.getAllByRole('combobox')
    //     expect(dropDown.length).toBe(1)
    //     // fireEvent.click(dropDown)
    //     console.log('rrrrrrrr ', dropDown);
    //     // fireEvent.change(dropDown, { target: { value: 1 } })
    //     // expect(props.setDropdownValue).toHaveBeenCalled()

    //     //expect(screen.getByRole('option', { name: 'Rock' }).selected).toBe(true)
    // })
    it('user wins the round', () => {
        props = {...props, roundResult:'1'}
        render(<BrowserRouter ><RPSWithComputer {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /user happy/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp/i })).toBeDefined()
    })

    it('computer wins the round', () => {
        props = {...props, roundResult:'2'}
        render(<BrowserRouter ><RPSWithComputer {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /comp happy/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /user normal/i })).toBeDefined()
    })

    it('user wins the game', () => {
        props = {...props, winner:'p1',roundResult:'1', userChoice:'r', computerChoice:'s'}
        render(<BrowserRouter ><RPSWithComputer {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /user wins/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp loses/i })).toBeDefined()
    })
    it('computer wins the game', () => {
        props = {...props, winner:'p2', roundResult:'2', userChoice:'r', computerChoice:'p'}
        render(<BrowserRouter ><RPSWithComputer {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /comp wins/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /user loses/i })).toBeDefined()
    })
})

