
import { 
    SET_DROPDOWN_VALUE,
    RESTART_GAME,
    SET_PLAY_DATA
 } from './constants'

export const setDropdownValue = (rounds) => ({ type: SET_DROPDOWN_VALUE, rounds })
export const restartGame = (selection) => ({ type: RESTART_GAME, selection })
export const setPlayData = (data) => ({ type: SET_PLAY_DATA, data })