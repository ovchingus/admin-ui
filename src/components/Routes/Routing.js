import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import RoleRoute from './RoleRoute';


const Routing = () => {
    return (
        <Switch>
            <RoleRoute path='/'>
                <Home />
            </RoleRoute>
        </Switch>
    );
};


export default Routing;
