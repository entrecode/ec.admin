// https://marmelab.com/react-admin/Admin.html#customroutes
import * as React from 'react';
import { Route } from 'react-router-dom';
import Foo from '../Foo';
/* import Bar from './Bar';
import Baz from './Baz'; */

export default [<Route exact path="/foo" component={Foo} />];
