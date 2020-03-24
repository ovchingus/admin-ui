import actionHandler from '../utils/actionHandler';
import { fetchModulesSuccessType } from '../actions/modules'


export const initialState = [];

const customHandler = {
    [fetchModulesSuccessType]: (state, action) => ([
        ...action.payload
    ])
};

const roles = actionHandler(customHandler, initialState);

export default roles;
