import React from 'react';
import { render, screen, configure, waitFor } from '@testing-library/react';
import RPSContainer from './RPSContainer';
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';

let history;
const testRender = (component) => {
    history = createMemoryHistory();
    return (render(<BrowserRouter >{component}</BrowserRouter>))
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

    it('renders correctly - Users clicks Human vs Computer button', async () => {
        const user = userEvent.setup()
        const button1 = screen.getByRole('button', { name: /human vs computer/i })
        user.click(button1)
        await waitFor(() => {
            expect(window.location.pathname).toEqual('/RPSWithComputer');
        });
    })

    it('renders correctly - Users clicks Computer vs Computer button', async () => {
        const user = userEvent.setup()
        const button2 = screen.getByRole('button', { name: /comp vs comp/i })
        user.click(button2)
        await waitFor(() => {
            expect(window.location.pathname).toEqual('/RPSCompWithComp');
        });
    })
})