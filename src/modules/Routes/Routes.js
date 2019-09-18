import React from 'react'
import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={null} />
      <Route exact path='/blog' component={null} />
      <Route exact path='/portal' component={null} />
    </Switch>
  )
}