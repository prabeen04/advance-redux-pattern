import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import BlogDetail from '../Blog/BlogDetail/BlogDetail';
import Concurrent from '../Concurrent/Concurrent';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id" component={BlogDetail} />
      <Route exact path="/concurrent" component={Concurrent} />
    </Switch>
  );
}
