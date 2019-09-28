import { combineReducers } from 'redux';
import { themeReducer } from '../modules/settings/theme/themeReducer';


export const rootReducer = combineReducers({
    theme: themeReducer,
})

export default rootReducer;