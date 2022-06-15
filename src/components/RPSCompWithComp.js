
import React from 'react'
import playRPS, { options, rpsPropTypes } from './PlayRPS'
import { Container, Row, Col } from 'react-bootstrap';

import compL from '../assets/Comp-angry.png'
import compW from '../assets/Comp-winner.png'
import compN from '../assets/Comp-normal.png'
import compH from '../assets/Comp-happy.png'

import CommonHeader from './CommonHeader';
import Winner from './Winner'
import RoundResult from './RoundResult'
import { styles } from '../js/styles';

const page='cvc'
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
            <CommonHeader 
            title={'Computer vs Computer'}
            setDropdownValue={setDropdownValue}
            rounds={rounds} 
            restartGame={restartGame}
            simulatePlay={simulatePlay}
            winner={winner}
            />
            
            {winner && <Winner winner={winner}
             userPoints={userPoints} 
             computerPoints={computerPoints}
             page={page} />}

           
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
                            <h3 style={{ ...styles.Points, backgroundColor: '#C642F8' }}>{userPoints}
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
                            <h3 style={{ ...styles.Points, backgroundColor: '#FFFF04' }}>{computerPoints}
                            </h3>
                        </Col>
                    </Row>}
                </Col>
            </Row>

            {roundResult && <RoundResult roundResult={roundResult} page={page}/>}
           
        </Container>
    )
}

RPSCompWithComp.propTypes = rpsPropTypes
export default playRPS(RPSCompWithComp);