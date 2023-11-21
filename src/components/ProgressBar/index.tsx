import './index.css'
import React, {useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectTimer } from 'store/timer/selectors'

import { selectTheme } from 'store/theme/selectors'

const ProgessBar = () => {

  const {
    timerMode,
    secondsLeft,
    currentTimeLeft,
  } = useSelector(selectTimer)

  const {
    color,
  } = useSelector(selectTheme)

  const center: number = 300 / 2
  const radius: number = 300 / 2 - 15 / 2
  const circumference: number = 2 * Math.PI * radius

  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)

  useEffect(() => {
    if (currentTimeLeft) {
    const progress = (secondsLeft / (currentTimeLeft * 60) ) * 100
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
    }
  }, [secondsLeft, offset, timerMode])


  return (
    <div className='pomodorro-progessBar'>
      <svg 
        className='pomodorro-svg'
        width={300}
        height={300}
      >
        <circle 
          className='pomodorro-svg-circle'
          stroke={color}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={15}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          ref={circleRef}
        >
        </circle>
      </svg>
    </div>
  )
}

export default ProgessBar