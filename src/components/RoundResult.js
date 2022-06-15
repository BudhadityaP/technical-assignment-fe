import React from 'react'
import { styles } from '../js/styles';
import { Row, Col } from 'react-bootstrap';

const roundResult = ({ roundResult, page }) => {
    const player1 = page ==='pwc' ? 'User' :'Computer 1'
    const player2 = page ==='pwc' ? 'Computer' :'Computer 2'
    return (
        <Row aria-label='round result section' style={styles.SectionContainer}>
            <Col><h2>Round Result :</h2> </Col>
            <Col><h2>{roundResult === '1' ? player1 + ' Wins' : roundResult === '2' ? player2 + ' wins' : roundResult}</h2></Col>
        </Row>
    )
}

export default roundResult