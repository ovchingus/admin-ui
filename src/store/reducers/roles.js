import actionHandler from '../utils/actionHandler';
import { setRolesType, fetchRolesSuccessType } from '../actions/roles'


export const initialState = [];

const customHandler = {
    [setRolesType]: (state, action) => ([
        ...state,
        ...action.payload
    ]),
    [fetchRolesSuccessType]: (state, action) => ([
        ...action.payload
    ])
};

const roles = actionHandler(customHandler, initialState);

export default roles;
