import React, { Fragment } from 'react'
import { useSelector } from "react-redux";
import Switch from '@material-ui/core/Switch';

export default function ThemeSwitch(props) {
    const themeType = useSelector(({ theme }) => theme.themeType)
    // alert(themeType)
    return (
        <Fragment>
            <Switch
                checked={true}
                onChange={null}
                value="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </Fragment>
    )
}
