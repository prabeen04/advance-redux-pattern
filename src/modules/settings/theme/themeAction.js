import * as types from './themeActionTypes';

export const setLightTheme = theme => ({
    type: types.SET_LIGHT_THEME,
    payload: theme
})

export const setDarkTheme = theme => ({
    type: types.SET_DARK_THEME,
    payload: theme
})