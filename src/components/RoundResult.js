import React from 'react'
import { styles } from '../js/styles';
import { Row, Col } from 'react-bootstrap';

const roundResult = ({ roundResult }) => {
    return (
        <Row style={styles.SectionContainer}>
            <Col><h2>Round Result :</h2> </Col>
            <Col><h2>{roundResult === '1' ? 'User Wins' : roundResult === '2' ? 'Computer wins' : roundResult}</h2></Col>
        </Row>
    )
}

export default roundResult