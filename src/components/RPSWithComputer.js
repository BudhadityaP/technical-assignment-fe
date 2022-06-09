
import React from 'react'
import Button from './Button'
import rpsHOC, { options, playElements, rpsPropTypes } from './RPSHOC'
import { Container, Row, Col } from 'react-bootstrap';
import Select from "react-select";

import userH from '../assets/smiley-happy.png'
import userN from '../assets/smiley-normal.png'
import userL from '../assets/smiley-angry.png'
import userW from '../assets/smiley-winner.png'

import compL from '../assets/Comp-angry.png'
import compW from '../assets/Comp-winner.png'
import compN from '../assets/Comp-normal.png'
import compH from '../assets/Comp-happy.png'
import Confetti from 'react-confetti'

import PropTypes from 'prop-types'

const RPSWithComputer = (props) => {
    const {
        setSelection,
        computerChoice,
        roundResult,
        userChoice,
        resetResult,
        userPoints,
        computerPoints,
        setDropdownValue,
        winner,
        rounds } = props

    return (
        <Container >
            <Container>
                <Row style={{ textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>
                    <h1>Play with Computer</h1>
                </Row>
                <Row>
                    <Col>
                        <Row style={{ alignItems: 'center', ...styles.SectionContainer }}>
                            <Col ><label style={styles.label}>Please select rounds to play </label></Col>
                            <Col >
                                <Select options={options} value={rounds} onChange={(rounds) => setDropdownValue(rounds)} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Button text={'Reset'} color={'#B5C4CB'} commonProps={{ ...styles.common, fontSize: 20, float: 'right' }} onClick={resetResult}></Button>
                    </Col>
                </Row>
            </Container>
            {winner &&  <Confetti confettiSource={winner === 'p1' ? { x: 0, y: 0 } : {x: window.innerWidth, y:0}}></Confetti>}
            {winner &&
                <Row style={{...styles.SectionContainer, backgroundColor:'#DCFBBA'}}>
                    {winner === 'p1' && <h1>User Wins the game {userPoints + ' - ' + computerPoints}</h1>}
                    {winner === 'p2' && <h1>Computer Wins the game {computerPoints + ' - ' + userPoints} </h1>}
                </Row>}
            <Row style={styles.Container}>
                <Col style={styles.SectionContainer}>
                    {/* Player 1 Section */}
                    <Row style={{ minHeight: 300 }}>
                        <Col>
                            {
                                playElements.map((e, i) => {
                                    return <Row style={{ margin: 5 }} key={e.value}> <Button
                                        isDisabled={winner !== null}
                                        commonProps={styles.common}
                                        color={e.color}
                                        style={styles.Rock}
                                        text={e.name}
                                        onClick={() => setSelection(e.value)}></Button></Row>
                                })
                            }
                        </Col>
                        <Col>
                            {winner ? 
                            <Col> {winner === 'p1' ? <img src={userW} alt="User Wins"></img> : <img src={userL} alt="User Loses" />}</Col>
                           :  <Col> {roundResult === '1' ? <img src={userH} alt="User Happy"></img> : <img src={userN} alt="User Normal" />}</Col>
                        }
                        </Col>
                    </Row>
                    {userChoice && <Row style={{ alignItems: 'center'}} >
                        <Col><h3>Choice : {userChoice}</h3></Col>
                        <Col >
                            <h3 style={{ ...styles.Points, backgroundColor: '#95BFF4' }}>{userPoints}
                            </h3>
                        </Col>
                    </Row>}

                </Col>
                <Col style={styles.SectionContainer}>
                    {/* Player 2 section */}
                    <Row style={{ minHeight: 300 }}>
                        {
                            winner ? 
                        <Col> {winner === 'p2' ? <img src={compW} alt="Comp Wins"></img> : <img src={compL} alt="Comp Loses" />}</Col>
                        : <Col> {roundResult === '2' ? <img src={compH} alt="Comp Happy"></img> : <img src={compN} alt="Comp" />}</Col>
                    }
                    </Row>
                    {computerChoice && <Row style={{ alignItems: 'center'}} >
                        <Col><h3>Choice : {computerChoice}</h3></Col>
                        <Col >
                            <h3 style={{ ...styles.Points, backgroundColor: '#95F49F' }}>{computerPoints}
                            </h3>
                        </Col>
                    </Row>}
                </Col>
            </Row>

            {roundResult && <Row style={styles.SectionContainer}>
                <Col><h2>Round Result :</h2> </Col>
                <Col><h2>{roundResult === '1' ? 'User Wins' : roundResult === '2' ? 'Computer wins' : roundResult}</h2></Col>
            </Row>}
           
        </Container>
    )
}

const styles = {
    common: {
        height: 50,
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: 20,
        margin: 20,
        width: 200,
        borderRadius: 10,
        border: 'none'
    },
    select: {
        width: 100,
        fontSize: 20
    },
    label: {
        fontSize: 20
    },
    SectionContainer: { textAlign: 'center', border: '1px solid #808080', borderRadius: 10, margin: 10, padding: 10 },
    Points: { backgroundColor: 'red', borderRadius: 30, width: 55, padding: 10, float: 'right' }
}

RPSWithComputer.propTypes = rpsPropTypes
export default rpsHOC(RPSWithComputer);