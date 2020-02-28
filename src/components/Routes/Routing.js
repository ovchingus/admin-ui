import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import RoleRoute from './RoleRoute';
import Organizations from '../Organizations';
import Roles from '../Roles';


const Routing = () => {
    return (
        <Switch>
            <RoleRoute exact path='/'>
                <Home />
            </RoleRoute>
            <RoleRoute path={['/organizations', '/organizations/:id']}>
                <Organizations />
            </RoleRoute>
            <RoleRoute path='/roles'>
                <Roles />
            </RoleRoute>

        </Switch>
    );
};


export default Routing;
