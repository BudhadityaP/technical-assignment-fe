import React from 'react'
import { styles } from '../js/styles';
import Confetti from 'react-confetti'
import { Row } from 'react-bootstrap';

const winner = ({ winner, userPoints, computerPoints, page }) => {
    const player1 = page ==='pwc' ? 'User' :'Computer 1'
    const player2 = page ==='pwc' ? 'Computer' :'Computer 2'
    return (
    <div>
        <Confetti confettiSource={winner === 'p1' ? { x: 0, y: 0 } : { x: window.innerWidth, y: 0 }}></Confetti>
        <Row style={{ ...styles.SectionContainer, backgroundColor: '#DCFBBA' }}>
            {winner === 'p1' && <h1>{player1} Wins the game {userPoints + ' - ' + computerPoints}</h1>}
            {winner === 'p2' && <h1>{player2} Wins the game {computerPoints + ' - ' + userPoints} </h1>}
        </Row>
    </div>)
}

export default winner