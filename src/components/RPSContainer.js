import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from './Button'
import rps from '../assets/rps.gif'

const RPSContainer = () => {
    const gameHeading = 'Welcome to the game - Rock Paper Scissors!'
    return (
        <Container fluid>
            <Row style={{ textAlign: 'center', paddingTop: 50, paddingBottom: 50 }}><h1 aria-label={gameHeading}>{gameHeading}</h1></Row>
            <Row style={{ textAlign: 'center' }}>
                <Col><Link style={{ textDecoration: 'none' }} to="/RPSWithComputer">
                    <Button color={'#F9BE5A'} commonProps={common} text={'Play with Computer'}></Button>
                </Link></Col>
                <Col><Link style={{ textDecoration: 'none' }} to="/RPSCompWithComp">
                    <Button color={'#41C0B4'} commonProps={common} text={'Comp vs Comp'}></Button>
                </Link></Col>
            </Row>
            <Row style={{textAlign:'center'}}>
                <Col>
                    <img area-label={rps} src={rps} alt='rps' />
                </Col>
            </Row>
        </Container>
    )
}

const common = {
    width: 300,
    height: 100,
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
    margin:10
}

export default RPSContainer;