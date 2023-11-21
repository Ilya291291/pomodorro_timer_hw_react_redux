import './index.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeTimerMode, resetTimerSecondsLeft } from 'store/timer/actions'

import { selectTimer } from 'store/timer/selectors'
import { selectTheme } from 'store/theme/selectors'


const Header = () => {

  const dispatch = useDispatch()

  const {
    timerLength,
    timerMode,
  } = useSelector(selectTimer)

  const {
    color,
    font
  } = useSelector(selectTheme)

  useEffect(() => {
    dispatch(resetTimerSecondsLeft())
  }, [timerLength, timerMode, dispatch])

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement
    dispatch(changeTimerMode(target.innerHTML))
    dispatch(resetTimerSecondsLeft())
  }

  return (
    <header className='pomodorro-header'>
      <h2 style={{fontFamily: font}}>помидорковый таймер</h2>
      <div className='pomodorro-header_controllers'>
        <div className='pomodorro-header_controller'
          onClick={handleClick}
          style={{backgroundColor: color, fontFamily: font}}
        >
            помодорро
        </div>
        <div className='pomodorro-header_controller'
          onClick={handleClick}
          style={{backgroundColor: color, fontFamily: font}}
        >
         long break
        </div>
        <div className='pomodorro-header_controller'
          onClick={handleClick}
          style={{backgroundColor: color, fontFamily: font}}
        >
            short break
        </div>
      </div>
    </header>
  )
}

export default Header