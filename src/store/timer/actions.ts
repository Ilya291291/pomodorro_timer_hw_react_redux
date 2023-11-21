export const startCountdown = () => {
  return {
    type: 'timer/startCountdown',
  }
}

export const startTimer = () => {
  return {
    type: 'timer/startTimer',
  }
}


export const pauseTimer = () => {
  return {
    type: 'timer/pauseTimer',
  }
}

export const startMode = () => {
  return {
    type: 'timer/startMode'
  }
}

export const resetTimer = () => {
  return {
    type: 'timer/resetTimer'
  }
}

export const timeUp = () => {
  return {
    type: 'timer/timeUp'
  }
}

export const changeTimerMode = (mode: string) => {
  return {
    type: 'timer/changeTimerMode',
    payload: mode
  }
}

export const resetTimerSecondsLeft = () => {
  return {
    type: 'timer/resetTimerSecondsLeft',
  }
}

export const changeNumberInput = (id: string, value: string) => {
  return {
    type: 'timer/changeNumberInput',
    payload: { id, value }
  }
}

