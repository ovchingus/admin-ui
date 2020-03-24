import { put, takeEvery } from 'redux-saga/effects'

import { setRolesType, fetchRolesType, fetchRolesSuccessType } from '../actions/roles'
import { roles } from './mock'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* getRoles() {
    yield delay(1000)
    yield put({ type: fetchRolesSuccessType, payload: roles })
}

export default function* watchRoles() {
    yield takeEvery(fetchRolesType, getRoles)
}

