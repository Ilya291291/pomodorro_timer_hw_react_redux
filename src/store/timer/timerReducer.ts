import { AnyAction } from "@reduxjs/toolkit"
import { ITimer } from "types/ITimer"

const initialState = {
  timerLength: {
    standard: 25,
    long: 15,
    short: 5
  },
  isTimerOn: false,
  timerMode: 'помодорро',
  timerText: 'start',
  secondsLeft: 25 * 60,
}

const timerReducer = (state: ITimer = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'timer/startCountdown' :
      return {...state, secondsLeft: state.secondsLeft -= 1 }
    case 'timer/startTimer' :
      return {...state, timerText: 'пауза'}
    case 'timer/pauseTimer' :
      return {...state, timerText: 'продолжить'}
    case 'timer/startMode' :
      return {...state, isTimerOn: !state.isTimerOn}
    case 'timer/resetTimer': 
      return {...state, secondsLeft: state.secondsLeft}
    case 'timer/timeUp': 
      return {...state, isTimerOn: false, timerText: 'перезапустить'}
    case 'timer/changeTimerMode':
      return {...state, timerMode: action.payload, timerText: 'start'}
    case 'timer/resetTimerSecondsLeft' :
      switch(state.timerMode) {
        case 'помодорро':
          return {
            ...state,
            secondsLeft: state.timerLength.standard * 60,
            currentTimeLeft: state.timerLength.standard
          }
        case 'long break':
          return {
            ...state,
            secondsLeft: state.timerLength.long * 60,
            currentTimeLeft: state.timerLength.long
          }
        case 'short break':
          return {
            ...state,
            secondsLeft: state.timerLength.short * 60,
            currentTimeLeft: state.timerLength.short
          }
        case 'перезапустить':
          return {
            ...state,
            secondsLeft: action.payload
          }
        default: 
          return state
      }
      case 'timer/changeNumberInput' :
        const { id, value } = action.payload
        if(id === 'standard') {
          return {
            ...state,
            timerLength: {
              ...state.timerLength,
              standard: value
            }
          }
        }if(id === 'long') {
          return {
            ...state,
            timerLength: {
              ...state.timerLength,
              long: value
            }
          }
        }if(id === 'short') {
          return {
            ...state,
            timerLength: {
              ...state.timerLength,
              short: value
            }
          }
        }
        return state
    default :
      return state
  }
}

export default timerReducer