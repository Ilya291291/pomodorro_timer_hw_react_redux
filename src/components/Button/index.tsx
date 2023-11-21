import './index.css'
import React from 'react'
import { FiSettings } from "react-icons/fi"

interface ButtonParams {
  onClick: () => void
}

const Button: React.FC<ButtonParams> = ({ onClick }) => {
  return (
    <div className='pomodorro-button' onClick={onClick} >
      <FiSettings 
        size={40}
      />
    </div>
  )
}

export default Button