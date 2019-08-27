import React, { Fragment } from 'react'
import Switch from '@material-ui/core/Switch';

export default function ThemeSwitch(props) {
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
