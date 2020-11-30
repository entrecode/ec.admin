// https://marmelab.com/react-admin/Admin.html#customroutes
import * as React from 'react';
import { Route } from 'react-router-dom';
import WithListController from './WithListController';
import Foo from './Foo';
import WithQuery from './WithQuery';

export default [
  <Route exact path="/custom-query" component={WithQuery} />,
  <Route exact path="/list-controller" component={WithListController} />,
  <Route exact path="/foo" component={Foo} />,
];
