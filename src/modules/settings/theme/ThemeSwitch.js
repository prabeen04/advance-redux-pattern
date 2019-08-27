import React, { Fragment } from 'react'
import { useSelector } from "react-redux";
import Switch from '@material-ui/core/Switch';

export default function ThemeSwitch(props) {
    const themeType = useSelector(({ theme }) => theme.themeType)

    function handleChange(checked) {
        if (themeType === 'light') {

        } else {

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
