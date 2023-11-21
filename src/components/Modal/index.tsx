import './index.css'
import React, { useState, useEffect } from 'react'
import ReactDOM  from 'react-dom'
import { useSelector } from 'react-redux'


import { selectTheme } from 'store/theme/selectors'
import Form from 'components/Form'
import { JsxChild } from 'typescript'

interface ModalParams {
  isOpen: boolean,
  children: JSX.Element[] | JSX.Element,
  onClose: () => void
}


const Modal: React.FC<ModalParams> = ({ isOpen, children, onClose }) => {

  const [active, setActive] = useState(false)
  const [className, setClassName] = useState('')

  const {
    color,
    font
  } = useSelector(selectTheme)

  const transitionEnd = (): void => {
    setClassName(isOpen ? 'enter-end' : 'exit-end')
    if(!isOpen) {
      setActive(false)
    }
  }

  useEffect(() => {
    if(isOpen) {
      setActive(true)
      setClassName('enter')
      setTimeout(() => {
        setClassName('enter-active')
      })
    }else {
      setClassName('exit')
      setTimeout(() => {
        setClassName('exit-active')
      })
    }
  }, [isOpen])

  const handleSumbitForm = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onClose()
  }

  if(!isOpen && !active) return null


  return ReactDOM.createPortal(
    <div className={'pomodorro-modal ' + className} onTransitionEnd={transitionEnd}>
       <div className='modal-content'>
           {children}
           <button className='modal-btn-apply' style={{backgroundColor: color, fontFamily: font}} onClick={handleSumbitForm}>Применить</button>
       </div>
   </div>,
  document.body
  )
}

export default Modal