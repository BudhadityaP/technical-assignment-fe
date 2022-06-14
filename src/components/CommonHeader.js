import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Select from "react-select";
import { options } from './PlayRPS';
import { styles } from '../js/styles';
import Button from './Button'

const commonHeader = ({ title, setDropdownValue, rounds, restartGame, simulatePlay, winner }) => {
    return (
        <Container>
            <Row style={styles.title}>
                <h1>{title}</h1>
            </Row>
            <Row  style={{ alignItems: 'center'}}>
                <Col>
                    <Row style={{ alignItems: 'center', ...styles.SectionContainer }}>
                        <Col ><label role={'label'} style={styles.label}>Please select rounds to play </label></Col>
                        <Col >
                            <Select options={options} value={rounds} onChange={(rounds) => setDropdownValue(rounds)} />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    {title === 'Computer vs Computer' &&
                        <Button commonProps={{ ...styles.common }} color={'#74C3F6'} isDisabled={winner !== null} text={'Play'} onClick={() => simulatePlay()}></Button>
                    }
                    <Button text={'Restart'} color={'#B5C4CB'} commonProps={{ ...styles.common, fontSize: 20, float: 'right' }} onClick={restartGame}></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default commonHeader