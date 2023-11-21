import { ITimer } from "types/ITimer"
export const selectTimer = (state: { timerReducer: ITimer }) => state.timerReducer
