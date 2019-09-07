import React, { Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Switch from '@material-ui/core/Switch';
import { setDarkTheme, setLightTheme } from "./themeAction";
import { lightTheme, darkTheme } from '../../../config/theme';

export default function ThemeSwitch(props) {
    const themeType = useSelector(({ theme }) => theme.themeType)
    const dispatch = useDispatch();

    function handleChange(e, checked) {
        if (themeType === 'light') {
            dispatch(setDarkTheme(darkTheme))
        } else {
            dispatch(setLightTheme(lightTheme))
        }
    }
    return (
        <Fragment>
            <Switch
                checked={themeType === 'light' ? false : true}
                onChange={handleChange}
                value="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                {...props}
            />
        </Fragment>
    )
}
