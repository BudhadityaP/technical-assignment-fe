import React from 'react';
import { render, screen, configure, waitFor, fireEvent } from '@testing-library/react';
import Button from "./Button";

let props = {
    color: '', text: '', onClick: jest.fn(), textColor: '', commonProps: {}, isDisabled: false
}
describe('Button component tests', () => {

    it('button text test', () => {
        props = { ...props, text: 'Test Button' }
        render(<Button {...props} />)
        const buttonTest = screen.getByRole('button', { name: /test button/i })
        expect(buttonTest).toBeDefined()
    })
    
    it('button click test', () => {
        props = { ...props, text: 'Test Button' }
        render(<Button {...props} />)
        const buttonTest = screen.getByRole('button', { name: /test button/i })
        expect(props.onClick).not.toHaveBeenCalled()
        fireEvent.click(buttonTest)
        expect(props.onClick).toHaveBeenCalled()
    })
})
