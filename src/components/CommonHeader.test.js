import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import CommonHeader from "./CommonHeader";

let props = {
    title: '',
    setDropdownValue: jest.fn(),
    rounds: '',
    restartGame: jest.fn(),
    simulatePlay: jest.fn(),
    winner: null
}
xdescribe('CommonHeader component tests', () => {

    it('CommonHeader Title render', () => {
        props = { ...props,title:'Test Title' }
        render(<CommonHeader {...props} />)
        const h1 = screen.getByRole('heading', { name: /test title/i })
        expect(h1).toBeDefined()
    })

    it('CommonHeader Play Button', () => {
        props = { ...props, title: 'Computer vs Computer' }
        render(<CommonHeader {...props} />)
        const playButton = screen.getByRole('button', { name: /play/i })
        const restartButton = screen.getByRole('button', { name: /restart/i })
        expect(playButton).toBeDefined()
        expect(restartButton).toBeDefined()
    })
})
