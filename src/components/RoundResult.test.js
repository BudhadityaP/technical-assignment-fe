import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import RoundResult from "./RoundResult";

let props = {};
describe('RoundResult component tests', () => {

    it('CommonHeader h2 render header', () => {
        props = { ...props, roundResult: '1', page: 'pwc' }
        render(<RoundResult {...props} />)
        const h21 = screen.getByRole('heading', { name: /Round Result :/i })
        expect(h21).toBeDefined()
    })

    it('CommonHeader h2 render User Wins the round', () => {
        props = { ...props, roundResult: '1', page: 'pwc' }
        render(<RoundResult {...props} />)
        const h21 = screen.getByRole('heading', { name: /Round Result :/i })
        const h22 = screen.getByRole('heading', { name: /user wins/i })
        expect(h21).toBeDefined()
        expect(h22).toBeDefined()
    })
    it('CommonHeader h2 render Computer Wins the round', () => {
        props = { ...props, roundResult: '2', page: 'pwc' }
        render(<RoundResult {...props} />)
        const h21 = screen.getByRole('heading', { name: /Round Result :/i })
        const h22 = screen.getByRole('heading', { name: /Computer wins/i })
        expect(h21).toBeDefined()
        expect(h22).toBeDefined()
    })

    it('CommonHeader h2 render Computer 1 Wins the round', () => {
        props = { ...props, roundResult: '1', page: 'cvc' }
        render(<RoundResult {...props} />)
        const h21 = screen.getByRole('heading', { name: /Round Result :/i })
        const h22 = screen.getByRole('heading', { name: /Computer 1 wins/i })
        expect(h21).toBeDefined()
        expect(h22).toBeDefined()
    })
    it('CommonHeader h2 render Computer 2 Wins the round', () => {
        props = { ...props, roundResult: '2', page: 'cvc' }
        render(<RoundResult {...props} />)
        const h21 = screen.getByRole('heading', { name: /Round Result :/i })
        const h22 = screen.getByRole('heading', { name: /Computer 2 wins/i })
        expect(h21).toBeDefined()
        expect(h22).toBeDefined()
    })

    it('CommonHeader h2 render draw round', () => {
        props = { ...props, roundResult: 'Draw', page: 'cvc' }
        render(<RoundResult {...props} />)
        const h22 = screen.getByRole('heading', { name: /draw/i })
        expect(h22).toBeDefined()
    })

})
