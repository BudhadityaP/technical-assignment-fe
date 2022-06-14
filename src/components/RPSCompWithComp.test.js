import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import RPSCompWithComp from './RPSCompWithComp';
import { BrowserRouter } from "react-router-dom";

let props = {
    setSelection: jest.fn(),
    computerChoice:'',
    roundResult:'',
    userChoice:'',
    restartGame: jest.fn(),
    simulatePlay: jest.fn(),
    test:jest.fn(),
    userPoints:0,
    computerPoints:0,
    setDropdownValue:jest.fn(),
    rounds:null,
}

let container;
describe('----- RPSCompWithComp tests -----', () => {
    beforeEach(() => {
        configure({
            throwSuggestions: true,
        })
    })

    it('snapshot test', () => {
        expect(render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)).toMatchSnapshot()
    })

    it('renders correctly - header exists', () => {
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        const h1 = screen.getByRole('heading', { name: /Computer vs Computer/i })
        const label = screen.getByRole('label', { name: /Please select rounds to play/i })
        expect(h1).toBeDefined();
        expect(label).toBeDefined();
    })

    it('renders correctly - buttons exist', () => {
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        const buttonRestart = screen.getByRole('button', { name: /restart/i })
        const buttonPlay = screen.getByRole('button', { name: /play/i })
        expect(buttonRestart).toBeDefined();
        expect(buttonPlay).toBeDefined();
    })

    it('click restart button', () => {
        render(<BrowserRouter><RPSCompWithComp {...props} /></BrowserRouter>)
        const buttonRestart = screen.getByRole('button', { name: /restart/i })
        expect(buttonRestart).toBeDefined();
        fireEvent.click(buttonRestart)
        expect(props.restartGame).toHaveBeenCalled()
    })

    it('click Play button', () => {
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        const buttonPlay = screen.getByRole('button', { name: /Play/i })
        fireEvent.click(buttonPlay)
        expect(props.simulatePlay).toHaveBeenCalled()
    })
    
    it('Comp 1 wins the round', () => {
        props = {...props, roundResult:'1'}
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /comp 1 happy/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp 2 normal/i })).toBeDefined()
    })

    it('Comp 2 wins the round', () => {
        props = {...props, roundResult:'2'}
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /comp 2 happy/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp 1 normal/i })).toBeDefined()
    })

    it('draw game', () => {
        props = {...props, userChoice:'r', computerChoice:'r', roundResult:'Draw'}
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /comp 1 normal/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp 2 normal/i })).toBeDefined()
    })

    it('comp 1 wins the game', () => {
        props = {...props, winner:'p1',roundResult:'1', userChoice:'r', computerChoice:'s'}
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /comp 1 wins/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp 2 loses/i })).toBeDefined()
    })

    it('comp 2 wins the game', () => {
        props = {...props, winner:'p2', roundResult:'2', userChoice:'r', computerChoice:'p'}
        render(<BrowserRouter ><RPSCompWithComp {...props} /></BrowserRouter>)
        expect(screen.getByRole('img', { name: /comp 2 wins/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp 1 loses/i })).toBeDefined()
    })
})

