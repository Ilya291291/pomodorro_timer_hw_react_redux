import './index.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectTimer } from 'store/timer/selectors'
import { selectTheme } from 'store/theme/selectors'

import {startCountdown, startTimer, startMode, pauseTimer, resetTimer, timeUp, resetTimerSecondsLeft } from 'store/timer/actions'

import ProgessBar from 'components/ProgressBar'

const Timer = () => {
  
  const dispatch = useDispatch()
  const {
    isTimerOn,
    timerText,
    secondsLeft
  } = useSelector(selectTimer)

  const {
    font
  } = useSelector(selectTheme)

  useEffect(() => {
    if (isTimerOn) {
      let ticking: NodeJS.Timer = setInterval(() => dispatch(startCountdown()), 1000)
      if (secondsLeft === 0) {
        dispatch(timeUp())
        clearInterval(ticking)
      }
      return () => clearInterval(ticking)
    }
  }, [isTimerOn, dispatch, secondsLeft])
 
  const handleClick = (): void => {
    dispatch(startMode())
    if(timerText === 'start' || timerText === 'продолжить'|| timerText === 'перезапустить') {
      dispatch(startTimer())
    }else if(timerText === 'пауза'){
      dispatch(pauseTimer())
    }
    if(secondsLeft === 0) {
      dispatch(resetTimerSecondsLeft())
    }
  }

  const formatOfTime = (timeLeft: number): string => {
    return `${Math.floor(timeLeft / 60)}:${(timeLeft % 60 > 9) ? timeLeft % 60 : '0' + timeLeft % 60}`
  }

  return (
    <div className='pomodorro-timer'>
      <ProgessBar/>
      <span className='pomodorro-timer-text'>{formatOfTime(secondsLeft)}</span>
      <div className='pomodorro-timer-btn'>
        <span className='start-btn' onClick={handleClick} style={{fontFamily: font}}>
          {timerText}
        </span>
      </div>
    </div>
  )
}

export default Timer