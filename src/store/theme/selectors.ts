import { ITheme } from "types/ITheme"

export const selectTheme = (state: { themeReducer: ITheme }) => state.themeReducer
