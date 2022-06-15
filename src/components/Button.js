import React from 'react'
import Button from 'react-bootstrap/Button';

const button = ({color, text, onClick, textColor, commonProps, isDisabled}) => {
    return <Button 
    aria-label={text}
    variant='' 
    style={{backgroundColor:color, color:textColor, ...commonProps}} 
    disabled={isDisabled} 
    onClick={onClick}>{text}</Button>
}


export default button