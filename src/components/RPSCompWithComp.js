
import React from 'react'
import Button from './Button'
import playRPS, { options, rpsPropTypes } from './PlayRPS'
import Select from "react-select";
import { Container, Row, Col } from 'react-bootstrap';
import Confetti from 'react-confetti'
import PropTypes from 'prop-types'
import compL from '../assets/Comp-angry.png'
import compW from '../assets/Comp-winner.png'
import compN from '../assets/Comp-normal.png'
import compH from '../assets/Comp-happy.png'
const RPSCompWithComp = (props) => {
    const {
        computerChoice,
        roundResult,
        userChoice,
        restartGame,
        userPoints,
        computerPoints,
        simulatePlay,
        setDropdownValue,
        winner,
        rounds } = props
    return (
        <Container style={{ flex: 2 }}>
            <Container>
                <Row style={{ textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>
                    <h1>Computer vs Computer</h1>
                </Row>
                <Row>
                    <Col>
                        <Row style={{ alignItems: 'center', ...styles.SectionContainer }}>
                            <Col ><label role={'label'} style={styles.label}>Please select rounds to play </label></Col>
                            <Col >
                                <Select options={options} value={rounds} onChange={(rounds) => setDropdownValue(rounds)} />
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col>
                        <Button commonProps={{...styles.common}} color={'#74C3F6'} isDisabled={winner!==null} text={'Play'} onClick={() => simulatePlay()}></Button>
                        <Button text={'Restart'} color={'#B5C4CB'} commonProps={{ ...styles.common, fontSize: 20, float: 'right' }} onClick={restartGame}></Button>
                    </Col>
                </Row>
            </Container>
            {winner && <Confetti confettiSource={winner === 'p1' ? { x: 0, y: 0 } : { x: window.innerWidth, y: 0 }}></Confetti>}
            {winner &&
                <Row style={{...styles.SectionContainer, backgroundColor:'#DCFBBA'}}>
                    {winner === 'p1' && <h1>Computer 1 Wins the game {userPoints + ' - ' + computerPoints}</h1>}
                    {winner === 'p2' && <h1>Computer 2 Wins the game {computerPoints + ' - ' + userPoints} </h1>}
                </Row>}
           
            <Row style={styles.Container}>
                <Col style={styles.SectionContainer}>
                    {/* Player 1 Section */}
                    <Row style={{ minHeight: 300 }}>
                        {
                            winner ? 
                        <Col> {winner === 'p1' ? <img src={compW} alt="Comp 1 Wins"></img> : <img src={compL} alt="Comp 1 Loses" />}</Col>
                        : <Col> {roundResult === '1' ? <img src={compH} alt="Comp 1 Happy"></img> : <img src={compN} alt="Comp 1 normal" />}</Col>
                    }
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
                        <Col> {winner === 'p2' ? <img src={compW} alt="Comp 2 Wins"></img> : <img src={compL} alt="Comp 2 Loses" />}</Col>
                        : <Col> {roundResult === '2' ? <img src={compH} alt="Comp 2 Happy"></img> : <img src={compN} alt="Comp 2 normal" />}</Col>
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
                <Col><h2>{roundResult === '1' ? 'Computer 1 Wins' : roundResult === '2' ? 'Computer 2 wins' : roundResult}</h2></Col>
            </Row>}
           
        </Container>
    )
}

const styles = {
    Flex: {
        border: '1px solid red',
    },
    margin10: {
        margin: 10
    },
    Container: {
        display: 'flex',
    },
    common: {
        height: 50,
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: 20,
        margin: 20,
        width:200,
        borderRadius:10,
        border:'none'
    },
    SectionContainer: { textAlign: 'center', border: '1px solid #808080', borderRadius: 10, margin: 10, padding: 20 },
    Points: { backgroundColor: 'red', borderRadius: 30, width: 55, padding: 10, float: 'right' }
}

RPSCompWithComp.propTypes = rpsPropTypes
export default playRPS(RPSCompWithComp);