export interface ITimer {
  timerLength: {
    standard: number,
    long: number,
    short: number
  },
  isTimerOn: boolean,
  timerMode: string,
  timerText: string,
  secondsLeft: number
  currentTimeLeft?: number | undefined
}