import './index.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/theme/selectors'


const Footer = () => {
  const {
    color,
    font
  } = useSelector(selectTheme)
  
  return (
    <footer className='pomodorro-footer' style={{fontFamily: font}}>
      Challenge by <span style={{color: color}}>fronEnd Mentor & Pavel</span>. Coded by <span style={{color: color}}>Ilya Smirnov.</span>
    </footer>
  )
}

export default Footer