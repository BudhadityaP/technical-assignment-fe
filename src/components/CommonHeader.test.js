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
describe('CommonHeader component tests', () => {

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
    
    
    // it('should display the correct number of options', () => {
    //     const dropDown = screen.getAllByRole('combobox')
    //     expect(dropDown.length).toBe(1)
    //     // fireEvent.click(dropDown)
    //     console.log('rrrrrrrr ', dropDown);
    //     // fireEvent.change(dropDown, { target: { value: 1 } })
    //     // expect(props.setDropdownValue).toHaveBeenCalled()

    //     //expect(screen.getByRole('option', { name: 'Rock' }).selected).toBe(true)
    // })
})
