import { put, takeEvery } from 'redux-saga/effects'

import { fetchModulesType, fetchModulesSuccessType  } from '../actions/modules'
import { modules } from './mock'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* getModules() {
    yield delay(1000)
    yield put({ type: fetchModulesSuccessType, payload: modules })
}

export default function* watchModules() {
    yield takeEvery(fetchModulesType, getModules)
}

