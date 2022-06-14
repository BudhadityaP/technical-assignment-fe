
import React from 'react'
import Button from './Button'
import playRPS, { options, playElements, rpsPropTypes } from './PlayRPS'
import { Container, Row, Col } from 'react-bootstrap';

import userH from '../assets/smiley-happy.png'
import userN from '../assets/smiley-normal.png'
import userL from '../assets/smiley-angry.png'
import userW from '../assets/smiley-winner.png'

import compL from '../assets/Comp-angry.png'
import compW from '../assets/Comp-winner.png'
import compN from '../assets/Comp-normal.png'
import compH from '../assets/Comp-happy.png'

import CommonHeader from './CommonHeader';
import Winner from './Winner'
import RoundResult from './RoundResult'
import { styles } from '../js/styles';

const RPSWithComputer = (props) => {
    const {
        setSelection,
        computerChoice,
        roundResult,
        userChoice,
        restartGame,
        userPoints,
        computerPoints,
        setDropdownValue,
        winner,
        rounds } = props

    return (
        <Container >
            <CommonHeader 
            title={'Play with Computer'}
            setDropdownValue={setDropdownValue}
            rounds={rounds} 
            restartGame={restartGame} />
            
            {winner && <Winner winner={winner}
             userPoints={userPoints} 
             computerPoints={computerPoints}
             page={'pwc'} />}

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
                                : <Col> {roundResult === '1' ? <img src={userH} alt="User Happy"></img> : <img src={userN} alt="User Normal" />}</Col>
                            }
                        </Col>
                    </Row>
                    {userChoice && <Row style={{ alignItems: 'center' }} >
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
                    {computerChoice && <Row style={{ alignItems: 'center' }} >
                        <Col><h3>Choice : {computerChoice}</h3></Col>
                        <Col >
                            <h3 style={{ ...styles.Points, backgroundColor: '#95F49F' }}>{computerPoints}
                            </h3>
                        </Col>
                    </Row>}
                </Col>
            </Row>

            {roundResult && <RoundResult roundResult={roundResult}/>}

        </Container>
    )
}



RPSWithComputer.propTypes = rpsPropTypes
export default playRPS(RPSWithComputer);