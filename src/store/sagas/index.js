import { all, fork } from 'redux-saga/effects';

import watchRoles from './roles'
import watchModules from './modules'

export default function* root() {
    yield all([
        watchRoles(),
        watchModules(),
    ]);
}
