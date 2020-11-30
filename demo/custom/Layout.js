// https://marmelab.com/react-admin/Theming.html#using-a-custom-layout
import React from 'react';
import { Layout as DefaultLayout } from 'react-admin';
import Menu from './Menu';

const Layout = (props) => <DefaultLayout {...props} menu={Menu} />;

export default Layout;
