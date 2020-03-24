import actionCreator, { BASE_ACTIONS } from '../utils/actionCreator';

const moduleName = 'roles';

const createAction = actionCreator(moduleName);

export const setRoles = createAction(BASE_ACTIONS.SET, 'roles');
export const setRolesType = setRoles()['type']

export const fetchRoles = createAction(BASE_ACTIONS.BASE, 'fetchRoles')
export const fetchRolesType = fetchRoles()['type']

export const fetchRolesSuccess = createAction(BASE_ACTIONS.SUCCESS, 'fetchRoles')
export const fetchRolesSuccessType = fetchRolesSuccess()['type']

export const fetchRolesFail = createAction(BASE_ACTIONS.FAIL, 'fetchRoles')
export const fetchRolesFailType = fetchRolesFail()['type']
