import actionHandler from '../utils/actionHandler';
import { setPermissionsType } from '../actions/roleRights';


export const initialState = {};

const customHandler = {
    [setPermissionsType]: (state, action) => ({
        ...state,
        ...action.payload
    })
};

const roleRights = actionHandler(customHandler, initialState);

export default roleRights;
