import './index.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/theme/selectors'

interface RadioInputParams {
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  id: string,
  value: string,
  name : string,
  className : string,
  checked : boolean,
}


const RadioInput: React.FC<RadioInputParams> = ({ onChange, id, value, name, className, checked }) => {
  const {
    font,
  } = useSelector(selectTheme)

  let labelText = name === 'color' ? "" : 'Aa'
  
  return (
    <div>
      <input className="modal-input-checkbox" name={name} onChange={onChange} id={id} value={value} type="radio" checked={checked}/>
      <label className={`modal-label-font ${className}`} htmlFor={value} style={{fontFamily: font}}>
        {labelText}
      </label>
    </div>
  )
}

export default RadioInput