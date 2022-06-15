import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import RPSWithComputer from './RPSWithComputer';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

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

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: () => {
        const { rpsState } = mockStore.getState()
        return {rpsState}
    },
    useDispatch: () => jest.fn()
}))
let initialState = {
    rounds: null,
    userPoints: 0,
    computerPoints: 0,
    computerChoice: '',
    userChoice: '',
    roundResult: '',
    winner: null
}

const store = configureStore()
let mockStore 

xdescribe('----- RPSWithComputer tests -----', () => {
    beforeEach(() => {
        configure({
            throwSuggestions: true,
        })
        jest.clearAllMocks()
    })

    it('snapshot test', () => {
        expect(render(<RPSWithComputer  />)).toMatchSnapshot()
    })

    it('renders correctly - header exists', () => {
        mockStore= store(initialState)
        render(<RPSWithComputer  />)
        const h1 = screen.getByRole('heading', { name: /Play with Computer/i })
        const label = screen.getByRole('label', { name: /Please select target score/i })
        expect(h1).toBeDefined();
        expect(label).toBeDefined();
    })

    it('renders correctly - buttons exist', () => {
        mockStore= store(initialState)
        render(<RPSWithComputer  />)
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
        mockStore= store(initialState)
        render(<RPSWithComputer  />)
        const buttonRestart = screen.getByRole('button', { name: /restart/i })
        expect(buttonRestart).toBeDefined();
        fireEvent.click(buttonRestart)
        // expect(props.restartGame).toHaveBeenCalled()
    })

    it('click Rock Paper Scissor buttons', () => {
        mockStore= store(initialState)
        render(<RPSWithComputer  />)
        const buttonRock = screen.getByRole('button', { name: /rock/i })
        const buttonPaper = screen.getByRole('button', { name: /paper/i })
        const buttonScissor = screen.getByRole('button', { name: /scissor/i })
        fireEvent.click(buttonRock)
        fireEvent.click(buttonPaper)
        fireEvent.click(buttonScissor)
        //expect(props.setSelection).toHaveBeenCalledTimes(3)
    })
    
    xit('user wins the round', () => {
        mockStore= store({
            rounds: null,
            userPoints: 0,
            computerPoints: 0,
            computerChoice: '',
            userChoice: '',
            roundResult: '1',
            winner: null
        })
        render(<RPSWithComputer  />)
        expect(screen.getByRole('img', { name: /user happy/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp/i })).toBeDefined()
    })

    xit('computer wins the round', () => {
        mockStore= store( {...initialState, roundResult:'2'})
        render(<RPSWithComputer  />)
        expect(screen.getByRole('img', { name: /comp happy/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /user normal/i })).toBeDefined()
    })

    xit('draw round', () => {
        props = {...props, userChoice:'r', computerChoice:'r', roundResult:'Draw'}
        render(<RPSWithComputer  />)
        expect(screen.getByRole('img', { name: /user normal/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp/i })).toBeDefined()
    })

    xit('user wins the game', () => {
        props = {...props, winner:'p1',roundResult:'1', userChoice:'r', computerChoice:'s'}
        render(<RPSWithComputer  />)
        expect(screen.getByRole('img', { name: /user wins/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /comp loses/i })).toBeDefined()
    })

    xit('computer wins the game', () => {
        mockStore= store( {...initialState,  winner:'p2', roundResult:'2', userChoice:'r', computerChoice:'p'})
        render(<RPSWithComputer  />)
        expect(screen.getByRole('img', { name: /comp wins/i })).toBeDefined()
        expect(screen.getByRole('img', { name: /user loses/i })).toBeDefined()
    })
})

