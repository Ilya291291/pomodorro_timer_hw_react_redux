import { AnyAction } from "@reduxjs/toolkit"
import { ITheme } from "types/ITheme"

const initialState = {
  color: 'rgb(248, 114, 114)',
  font: 'Kumbh Sans, sans-serif',
}

const themeReducer = (state: ITheme = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'theme/changeColor':
      return {
        ...state,
        color: action.payload
      }
    case 'theme/changeFont':
      return {
        ...state,
        font: action.payload
      }
    default:
      return state
  }
}

export default themeReducer