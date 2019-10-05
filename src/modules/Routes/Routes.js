import React from 'react'
import { Switch, Route } from "react-router-dom";
import Blog from '../Blog/Blog';
import Portal from '../Portal/Portal';
import Home from '../Home/Home';
import BlogDetail from '../Blog/BlogDetail/BlogDetail';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/blog' component={Blog} />
    <Route exact path='/blog/:id' component={BlogDetail} />
      <Route exact path='/portal' component={Portal} />
    </Switch>
  )
}