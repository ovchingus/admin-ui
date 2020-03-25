import actionHandler from '../utils/actionHandler';
import {
    fetchRolesSuccessType,
    setPermissionType,
    removeRoleType,
    addRoleType,
    updateRoleType
} from '../actions/roles'


export const initialState = [];

function togglePermission(permissions) {
    const compute = (c, r, u, d) => ({
        ...permissions,
        create: !!c,
        read: !!r,
        update: !!u,
        delete: !!d
    })
    const { create: c, read: r, update: u, delete: d } = permissions;
    // edit => view
    if (c && r && u && d) {
        return compute(0, 1, 0, 0)
    }
    // view => off
    if (!c && r && !u && !d) {
        return compute(0, 0, 0, 0)
    }
    // off => edit
    if (!c && !r && !u && !d) {
        return compute(1, 1, 1, 1)
    }
}

const customHandler = {
    [fetchRolesSuccessType]: (state, action) => ([
        ...action.payload
    ]),
    [setPermissionType]: (state, action) => {
        const target = state.findIndex(i => i.name === action.payload.role)
        const newTargetPermission = togglePermission(state[target].permissions[action.payload.module])
        const updatedTarget = {
            ...state[target],
            permissions: {
                ...state[target].permissions,
                [action.payload.module]: newTargetPermission,
            }
        }

        return ([
            ...state.slice(0, target),
            updatedTarget,
            ...state.slice(target + 1),
        ])
    },
    [removeRoleType]: (state, action) => {
        const target = state.findIndex(i => i.name === action.payload.role)
        return ([
            ...state.slice(0, target),
            ...state.slice(target + 1),
        ])
    },
    [addRoleType]: (state, action) => {
        return ([
            ...state,
            ...action.payload.role
        ])
    },
    [updateRoleType]: (state, action) => {
        const target = state.findIndex(i => i.name === action.payload.role.name)

        return ([
            ...state.slice(0, target),
            ...action.payload.newRole,
            ...state.slice(target + 1),
        ])
    }
};

const roles = actionHandler(customHandler, initialState);

export default roles;
