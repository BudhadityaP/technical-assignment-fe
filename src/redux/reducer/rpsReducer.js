import {
    SET_DROPDOWN_VALUE,
    RESTART_GAME,
    SET_PLAY_DATA,
} from '../action/constants'

const initialState = {
    rounds: null,
    userPoints: 0,
    computerPoints: 0,
    computerChoice: '',
    userChoice: '',
    roundResult: '',
    winner: null
}

const rpsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DROPDOWN_VALUE:
            return {
                ...state,
                rounds: action.rounds
            }
        case SET_PLAY_DATA:
            const {
                roundResult,
                userPoints,
                computerPoints,
                computerChoice,
                userChoice,
                winner } = action.data
            return {
                ...state,
                computerPoints: computerPoints,
                userPoints: userPoints,
                roundResult: roundResult,
                computerChoice: computerChoice,
                userChoice: userChoice,
                winner: winner
            }
        case RESTART_GAME:
        default: {
            return {
                ...initialState,
            }
        }
    }
}

export default rpsReducer;