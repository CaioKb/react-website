import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Login from '../containers/Login/Login.js'
import Home from '../containers/Home/Home'

export default function Routes() {
    return (
            <Switch>
                <Redirect exact path='/' to='/login' />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
            </Switch>
    );
}