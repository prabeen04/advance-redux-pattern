import React, { Fragment, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Switch from '@material-ui/core/Switch';
import { setDarkTheme, setLightTheme } from "./themeAction";
import { lightTheme, darkTheme } from '../../../config/theme';

export default function ThemeSwitch(props) {
    const themeType = useSelector(({ theme }) => theme.themeType)
    const dispatch = useDispatch();

    function handleChange(e, checked) {
        console.log(e, checked)
        //   (dispatch) =>   setDarkTheme(darkTheme)
            if (themeType === 'light') {
            setDarkTheme(darkTheme)(dispatch)
        } else {
            setLightTheme(lightTheme)(dispatch)
            // dispatch(() => setLightTheme(lightTheme))
            // setLightTheme(lightTheme)
        }
    }
    return (
        <Fragment>
            <Switch
                checked={themeType === 'light' ? false : true}
                onChange={handleChange}
                value="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </Fragment>
    )
}
