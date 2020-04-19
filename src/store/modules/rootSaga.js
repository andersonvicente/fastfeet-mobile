import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import problem from './problem/sagas';
import delivery from './delivery/sagas';

export default function* rootSaga() {
  return yield all([auth, problem, delivery]);
}
