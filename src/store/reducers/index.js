import { combineReducers } from 'redux-immutablejs';

import users from './users';
import roleRights from './roleRights';
import roles from './roles'
import modules from './modules'

export default combineReducers({
    users,
    roleRights,
    roles,
    modules
});
