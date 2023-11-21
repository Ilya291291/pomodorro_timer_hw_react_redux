import React from 'react'
import './index.css'

import { useSelector } from 'react-redux'
import { selectTheme } from 'store/theme/selectors'

interface FormHeaderParams {
  onClose: () => void
}

const FormHeader: React.FC<FormHeaderParams> = ({ onClose }) => {
  const {
    font
  } = useSelector(selectTheme)    

  return (
    <div className='modal-content-header'>
      <span className='modal-content-header-settings' style={{fontFamily: font}}>Настройки</span>
      <span className='modal-content-header-close-btn' onClick={onClose}>X</span>
    </div>
  )
}

export default FormHeader