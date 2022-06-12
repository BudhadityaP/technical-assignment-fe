import React from 'react';
import { render, screen, configure } from '@testing-library/react';
import RPSContainer from './RPSContainer';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

const testRender = (component) => {
    return (render(<BrowserRouter>{component}</BrowserRouter>))
}
let container;
describe('----- RPSContainer tests -----', () => {
    beforeEach(() => {
        configure({
            throwSuggestions: true,
        })
        container = testRender(<RPSContainer />);

    })

    it('renders correctly - header exists', () => {
        expect(container).toMatchSnapshot()
        const h1 = screen.getByRole('heading', { name: /welcome to the game - rock paper scissors!/i })
        expect(h1).toBeDefined();

    })

    it('renders correctly - buttons exist', () => {
        const button1 = screen.getByRole('button', { name: /human vs computer/i })
        const button2 = screen.getByRole('button', { name: /comp vs comp/i })
        expect(button1).toBeDefined();
        expect(button2).toBeDefined();
    })

    xit('renders correctly - Users clicks Human vs Computer button', async () => {
        const user = userEvent.setup()
        const button1 = screen.getByRole('button', { name: /human vs computer/i })
        expect(button1).toBeDefined();
       await user.click(button1)
        // const headingPWC = screen.getByRole('heading', { name: /play with computer/i })
        // expect(headingPWC).toBeInTheDocument();
    })
})