import * as types from './themeActionTypes';

export const setLightTheme = theme => dispatch => {
    console.log(theme, dispatch)
    dispatch({
        type: types.SET_LIGHT_THEME,
        payload: theme
    })

}

export const setDarkTheme = theme => dispatch => {
    console.log(theme, dispatch)
    dispatch({
        type: types.SET_DARK_THEME,
        payload: theme
    })
} 