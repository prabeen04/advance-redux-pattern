import { lightTheme } from "../../../config/theme";
import * as types from './themeActionTypes';

const initialState = {
    themeType: 'light',
    theme: lightTheme,
};
export const themeReducer = (state = initialState, action) => {
    switch (action.payload) {
        case types.SET_LIGHT_THEME:
            console.log(action.payload)
            return { ...state, themeType: 'light', theme: action.payload };
            case types.SET_DARK_THEME:
                console.log(action.payload)
            return { ...state, themeType: 'dark', theme: action.payload };
        default:
            return state
            // throw new Error('invalid condition')
    }
}