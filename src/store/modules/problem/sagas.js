import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { createSuccess, createFailure } from './actions';

export function* create({ payload }) {
  try {
    const { deliveryId, description } = payload.data;

    const response = yield call(api.post, `delivery/${deliveryId}/problems`, {
      description,
    });

    const problem = response.data;

    yield put(createSuccess(problem));
  } catch (err) {
    Alert.alert(
      'Falha no envio',
      err && err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Houve um erro ao enviar problema'
    );
    yield put(createFailure());
  }
}

export default all([takeLatest('@problem/CREATE_REQUEST', create)]);
