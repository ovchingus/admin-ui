import actionCreator, { BASE_ACTIONS } from '../utils/actionCreator';

const moduleName = 'modules';

const createAction = actionCreator(moduleName);

export const fetchModules = createAction(BASE_ACTIONS.BASE, 'fetchModules')
export const fetchModulesType = fetchModules()['type']

export const fetchModulesSuccess = createAction(BASE_ACTIONS.SUCCESS, 'fetchModules')
export const fetchModulesSuccessType = fetchModulesSuccess()['type']

export const fetchModulesFail = createAction(BASE_ACTIONS.FAIL, 'fetchModules')
export const fetchModulesFailType = fetchModulesFail()['type']
