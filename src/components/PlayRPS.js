import React, { Component } from "react"
import _ from 'lodash'
import PropTypes from 'prop-types'

export const rpsPropTypes = {
    setSelection: PropTypes.func,
    computerChoice: PropTypes.string,
    userChoice: PropTypes.string,
    restartGame: PropTypes.func,
    userPoints: PropTypes.number,
    computerPoints: PropTypes.number,
    setDropdownValue: PropTypes.func,
    winner: PropTypes.string,
    rounds: PropTypes.object,
    roundResult: PropTypes.string,
    simulatePlay:PropTypes.func
}

export const options = [
    { value: 1, label: 'One' },
    { value: 3, label: 'Three' },
    { value: 5, label: 'Five' },
    { value: 10, label: 'Ten' }]

export const playElements = [
    { name: 'Rock', value: 'r', color: '#33FFBD' },
    { name: 'Paper', value: 'p', color: '#FFBD33' },
    { name: 'Scissor', value: 's', color: '#33A7FF' }]

const playRPS = (WrappedComponent) => {
    class PlayRPS extends Component {
        constructor(props) {
            super(props)
            this.state = {
                rounds: null,
                userPoints: 0,
                computerPoints: 0,
                computerChoice: '',
                userChoice: '',
                roundResult: '',
                winner: null
            }
        }

        randomSelection = () => {
            return playElements[Math.floor(Math.random() * playElements.length)].value;
        }
        setDropdownValue = (v) => {
            this.restartGame()
            this.setState({ rounds: v })
        }
        restartGame = () => {
            this.setState({
                rounds: null,
                userPoints: 0,
                computerPoints: 0,
                computerChoice: '',
                userChoice: '',
                roundResult: '',
                winner: null
            })
        }
        setSelection = (userChoice) => {
            const compChoice = this.randomSelection()
            this.checkWinner(userChoice, compChoice);
        }

        checkWinner = (userChoice, compChoice) => {
            this.setState({
                computerChoice: _.find(playElements, { value: compChoice }).name,
                userChoice: _.find(playElements, { value: userChoice }).name
            })
            if (userChoice === compChoice) {
                this.setState({ roundResult: 'Draw' })
            }
            //Player 1 wins
            else if ((userChoice === 'r' && compChoice === 's') || (userChoice === 'p' && compChoice === 'r') || (userChoice === 's' && compChoice === 'p')) {
                this.setState({
                    roundResult: '1',
                    userPoints: this.state.userPoints + 1
                }, () => { this.setWinner() }
                )
            }
            //Player 2 wins
            else {
                this.setState({
                    roundResult: '2',
                    computerPoints: this.state.computerPoints + 1
                }, () => { this.setWinner() }
                )
            }
        }
        setWinner = () => {
            const { rounds } = this.state
            rounds && this.setState({ winner: this.state.userPoints === rounds.value ? 'p1' : this.state.computerPoints === rounds.value ? 'p2' : null })
        }
        simulatePlay = () => {
            const Comp1Choice = this.randomSelection()
            const Comp2Choice = this.randomSelection()
            this.checkWinner(Comp1Choice, Comp2Choice);
        }

        render() {
            const { computerChoice, userChoice, computerPoints, userPoints, roundResult, winner, rounds } = this.state
            return <WrappedComponent
                setSelection={userChoice => this.setSelection(userChoice)}
                computerChoice={computerChoice}
                userChoice={userChoice}
                roundResult={roundResult}
                restartGame={this.restartGame}
                computerPoints={computerPoints}
                userPoints={userPoints}
                simulatePlay={this.simulatePlay}
                setDropdownValue={rounds => this.setDropdownValue(rounds)}
                winner={winner}
                rounds={rounds}
                {...this.props}
            />
        }
    }
    PlayRPS.propTypes = WrappedComponent.propTypes
    return PlayRPS
}



export default playRPS