export const changeColor = (value: string) => {
  return {
      type: 'theme/changeColor',
      payload: value
  }
}

export const changeFont = (value: string) => {
  return {
    type: 'theme/changeFont',
    payload: value
  }
}

