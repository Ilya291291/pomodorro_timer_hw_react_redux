import './index.css'
import React, { useState  } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectTheme } from 'store/theme/selectors'
import { selectTimer } from 'store/timer/selectors'

import { changeNumberInput } from 'store/timer/actions'
import { changeColor } from 'store/theme/actions'
import { changeFont } from 'store/theme/actions'

import NumberInput from './components/NumberInput'
import RadioInput from './components/RadioInput'

const Form = () => {

  const dispatch = useDispatch()

  const {
    timerLength
  } = useSelector(selectTimer)

  const {
    color,
    font,
  } = useSelector(selectTheme)

  const handleInputNumb = (event : React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const { id, value } = target
    dispatch(changeNumberInput(id, value))
  }
 
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement
    const { name, value } = target
    if(name === 'color') {
      dispatch(changeColor(value))
    }else if(name === 'font') {
      dispatch(changeFont(value))
    }
  }
  
  return (
    <form className='modal-content-form'>
    <fieldset className='modal-content-form-fieldset'>
      <h3 className='modal-heading' style={{fontFamily: font}}>Bремя ( минуты )</h3>
      <div className='modal-content-form-container'>
        <NumberInput
          onChange={handleInputNumb}
          id="standard" 
          labelText={'помодорро'}
          value={timerLength.standard}
        />
        <NumberInput 
          onChange={handleInputNumb}
          id="long"
          labelText={'short break'}
          value={timerLength.long}
        />
        <NumberInput
          onChange={handleInputNumb}
          id="short" 
          labelText={'long break'}
          value={timerLength.short}
        />
      </div>
    </fieldset>
    <fieldset className='modal-content-checkbox-fieldset'>
      <h3 className='modal-heading' style={{fontFamily: font}}>Шрифт</h3>
      <div className='modal-content-checkbox-container'>
        <RadioInput
          name="font" 
          onChange={handleChange}
          id="Kumbh Sans, sans-serif"
          value="Kumbh Sans, sans-serif"
          className="kumbh"
          checked={font === 'Kumbh Sans, sans-serif' ? true : false}
        />
        <RadioInput
          name="font" 
          onChange={handleChange}
          id="Roboto Slab, serif"
          value="Roboto Slab, serif"
          className="roboto"
          checked={font === 'Roboto Slab, serif' ? true : false}          
        />
        <RadioInput
          name="font" 
          onChange={handleChange}
          id="Brush Script MT, cursive"
          value="Brush Script MT, cursive"
          className="space-mono"
          checked={font === 'Brush Script MT, cursive' ? true : false}
        />
        </div>
    </fieldset>
    <fieldset className='modal-content-checkbox-fieldset'>
      <h3 className='modal-heading' style={{fontFamily: font}}>Цвет</h3>
      <div className='modal-content-checkbox-container'>
        <RadioInput
          name="color"
          onChange={handleChange}
          id="rgb(248, 114, 114)"
          value="rgb(248, 114, 114)"
          className="clr1" 
          checked={color === 'rgb(248, 114, 114)' ? true : false}           
        />
        <RadioInput
          name="color" 
          onChange={handleChange}
          id="rgb(114, 244, 248)"
          value="rgb(114, 244, 248)"
          className="clr2"
          checked={color === 'rgb(114, 244, 248)' ? true : false}           
        />
        <RadioInput
          name="color" 
          onChange={handleChange}
          id="rgb(216, 130, 248)"
          value="rgb(216, 130, 248)"
          className="clr3"
          checked={color === 'rgb(216, 130, 248)' ? true : false}            
        />
      </div>
    </fieldset>
   </form>
  )
}

export default Form