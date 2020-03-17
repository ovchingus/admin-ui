import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import RoleRoute from './RoleRoute';
import Organizations from '../Organizations';
import Roles from '../Roles';
import Participants from '../Participants';


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
            <RoleRoute path='/participants'>
                <Participants />
            </RoleRoute>

        </Switch>
    );
};


export default Routing;
