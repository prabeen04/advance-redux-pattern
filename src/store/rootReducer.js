import { combineReducers } from 'redux';
import { themeReducer } from '../modules/settings/theme/themeReducer';
import { } from "module";
import { createReducers } from './utils/createReducers';
import { GET_BLOGS, GET_BLOG_BY_ID } from '../modules/Blog/BlogActionTypes';

export const STATES = {
    BLOG: 'blog'
}
export const rootReducer = combineReducers({
    theme: themeReducer,
    [STATES.BLOG]: combineReducers({
        list: createReducers(GET_BLOGS),
        read: createReducers(GET_BLOG_BY_ID)
    })
})

export default rootReducer;