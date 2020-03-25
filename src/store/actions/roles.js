import actionCreator, { BASE_ACTIONS } from '../utils/actionCreator';

const moduleName = 'roles';

const createAction = actionCreator(moduleName);

export const addRole = createAction(BASE_ACTIONS.BASE, 'add');
export const addRoleType = addRole()['type']

export const updateRole = createAction(BASE_ACTIONS.BASE, 'update');
export const updateRoleType = updateRole()['type']

export const removeRole = createAction(BASE_ACTIONS.BASE, 'remove');
export const removeRoleType = removeRole()['type']

export const setPermission = createAction(BASE_ACTIONS.SET, 'permission');
export const setPermissionType = setPermission()['type']

export const fetchRoles = createAction(BASE_ACTIONS.BASE, 'fetchRoles')
export const fetchRolesType = fetchRoles()['type']

export const fetchRolesSuccess = createAction(BASE_ACTIONS.SUCCESS, 'fetchRoles')
export const fetchRolesSuccessType = fetchRolesSuccess()['type']

export const fetchRolesFail = createAction(BASE_ACTIONS.FAIL, 'fetchRoles')
export const fetchRolesFailType = fetchRolesFail()['type']
