import React from 'react'
import { Switch, Route } from "react-router-dom";
import Blog from '../Blog/Blog';
import Portal from '../Portal/Portal';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Blog} />
      <Route exact path='/blog' component={<Blog />} />
      <Route exact path='/portal' component={<Portal />} />
    </Switch>
  )
}