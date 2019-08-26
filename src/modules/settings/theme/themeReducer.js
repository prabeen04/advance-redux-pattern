import { lightTheme } from "../../../config/theme";
import * as types from './themeActionTypes';

const initialState = {
    themeType: 'light',
    theme: lightTheme,
};
export const themeReducer = (state=initialState, action) => {
    switch (action.payload) {
        case types.SET_LIGHT_THEME:
            return {...state, themeType: action.payload.themeType, theme: action.payload.theme}    
        default:
            throw new Error('invalid condition')
}