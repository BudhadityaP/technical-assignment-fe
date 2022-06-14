import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import Winner from "./Winner";

let props = {
    winner:null, userPoints:0, computerPoints:0, page:''
}
describe('Winner component tests', () => {

    it('Winner test - Play with Computer - User wins', () => {
        props = { ...props, winner: 'p1', page: 'pwc', userPoints: 1, computerPoints: 0 }
        render(<Winner {...props} />)
        const h1 = screen.getByRole('heading', { name: /User Wins the game 1 - 0/i })
        expect(h1).toBeDefined()
    })
    
    it('Winner test - Play with Computer - Computer Wins', () => {
        props = { ...props, winner: 'p2', page: 'pwc',userPoints:0, computerPoints:1  }
        render(<Winner {...props} />)
        const h1 = screen.getByRole('heading', { name: /Computer Wins the game 1 - 0/i })
        expect(h1).toBeDefined()
    })

    it('Winner test - Computer vs Computer - Computer 1 wins', () => {
        props = { ...props, winner: 'p1', page: 'cvc', userPoints: 1, computerPoints: 0 }
        render(<Winner {...props} />)
        const h1 = screen.getByRole('heading', { name: /Computer 1 Wins the game 1 - 0/i })
        expect(h1).toBeDefined()
    })
    
    it('Winner test - Computer vs Computer - Computer 2 wins', () => {
        props = { ...props, winner: 'p2', page: 'cvc',userPoints:0, computerPoints:1  }
        render(<Winner {...props} />)
        const h1 = screen.getByRole('heading', { name: /Computer 2 Wins the game 1 - 0/i })
        expect(h1).toBeDefined()
    })
})
