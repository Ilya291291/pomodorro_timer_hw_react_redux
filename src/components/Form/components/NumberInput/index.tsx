import './index.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/theme/selectors'


interface NumberInputParams {
  labelText : string,
  value : number,
  id : string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const NumberInput : React.FC<NumberInputParams> = ({ labelText, value, id, onChange }) => {

  const {
    font
  } = useSelector(selectTheme)
  
  return (
    <div className='modal-content-form-input'>
      <label htmlFor="помодорро" style={{fontFamily: font}}>{labelText}</label>
      <input className="modal-input-numb" id={id} type="number" value={value} onChange={onChange}/>
    </div>
  )
}

export default NumberInput