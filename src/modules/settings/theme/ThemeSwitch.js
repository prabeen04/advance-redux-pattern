import React, { Fragment, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Switch from '@material-ui/core/Switch';
import { setDarkTheme, setLightTheme } from "./themeAction";
import { lightTheme, darkTheme } from '../../../config/theme';

export default function ThemeSwitch(props) {
    const themeType = useSelector(({ theme }) => theme.themeType)
    const dispatch = useDispatch()
    const toggleTheme = useCallback(handleChange, [dispatch])
    useEffect(() => {
        themeType === 'light'
            ? document.body.style.backgroundColor = '#f4f4f4'
            : document.body.style.backgroundColor = '#222222'
    }, [themeType])

    function handleChange(e, checked) {
        console.log(e, checked)
        if (checked) {
            setDarkTheme(darkTheme)
        } else {
            setLightTheme(lightTheme)
        }
    }
    return (
        <Fragment>
            <Switch
                checked={themeType === 'light' ? false : true}
                onChange={toggleTheme}
                value="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </Fragment>
    )
}
