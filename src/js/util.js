import _ from 'lodash'

export const options = [
    { value: 1, label: 'One' },
    { value: 3, label: 'Three' },
    { value: 5, label: 'Five' },
    { value: 10, label: 'Ten' }]

export const playElements = [
    { name: 'Rock', value: 'r', color: '#33FFBD' },
    { name: 'Paper', value: 'p', color: '#FFBD33' },
    { name: 'Scissor', value: 's', color: '#33A7FF' }]

export const randomSelection = () => {
    return playElements[Math.floor(Math.random() * playElements.length)].value;
}

export const checkWinner = async (sel, userPoints, computerPoints, rounds) => {
    let playData = {}
    const compChoice = randomSelection()
    const computerChoice = _.find(playElements, { value: compChoice }).name
    const userChoice = _.find(playElements, { value: sel }).name

    if (sel === compChoice) {
        playData = {
            roundResult: 'Draw',
            userPoints,
            computerPoints,
            computerChoice,
            userChoice,
            winner: null
        }
    }
    //Player 1 wins
    else if ((sel === 'r' && compChoice === 's') || (sel === 'p' && compChoice === 'r') || (sel === 's' && compChoice === 'p')) {
        userPoints = userPoints + 1
        playData = {
            roundResult: '1',
            userPoints: userPoints,
            computerPoints,
            computerChoice,
            userChoice,
            winner: userPoints === rounds.value ? 'p1' : computerPoints === rounds.value ? 'p2' : null
        }
    }
    //Player 2 wins
    else {
        computerPoints = computerPoints + 1
        playData = {
            roundResult: '2',
            userPoints,
            computerPoints: computerPoints,
            computerChoice,
            userChoice,
            winner: userPoints === rounds.value ? 'p1' : computerPoints === rounds.value ? 'p2' : null
        }
    }
    return playData
}