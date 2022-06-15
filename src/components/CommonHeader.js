import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Select from "react-select";
import { options } from './PlayRPS';
import { styles } from '../js/styles';
import Button from './Button'

const commonHeader = ({ title, setDropdownValue, rounds, restartGame, simulatePlay, winner }) => {
    return (
        <Container aria-label='common header container'>
            <Row style={styles.title}>
                <h1 area-label={title}>{title}</h1>
            </Row>
            <Row style={{ alignItems: 'center' }}>
                <Col>
                    <Row style={{ alignItems: 'center', ...styles.SectionContainer }}>
                        <Col ><label role={'label'} area-label='Please select target score' style={styles.label}>Please select target score</label></Col>
                        <Col >
                            <Select aria-label='select-rounds' options={options} value={rounds} onChange={(rounds) => setDropdownValue(rounds)} />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    {title === 'Computer vs Computer' &&
                        <Button commonProps={{ ...styles.common }} color={'#40F150'} isDisabled={winner !== null} text={'Play'} onClick={() => simulatePlay()}></Button>
                    }
                    <Button text={'Restart'} color={'#B5C4CB'} commonProps={{ ...styles.common, fontSize: 20, float: 'right' }} onClick={restartGame}></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default commonHeader