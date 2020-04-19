import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  confirmPickupSuccess,
  confirmPickupFailure,
  confirmDeliverySuccess,
  confirmDeliveryFailure,
} from './actions';

export function* confirmPickup({ payload }) {
  try {
    const { deliverymenId, deliveryId } = payload.data;

    const response = yield call(
      api.put,
      `deliveryman/${deliverymenId}/available/${deliveryId}`,
      {
        start_date: new Date(),
      }
    );

    const delivery = response.data;

    yield put(confirmPickupSuccess(delivery));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      err && err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Houve um erro ao confirmar retirada'
    );
    yield put(confirmPickupFailure());
  }
}

export function* confirmDelivery({ payload }) {
  try {
    const { deliverymenId, deliveryId, signatureId } = payload.data;

    const response = yield call(
      api.put,
      `deliveryman/${deliverymenId}/available/${deliveryId}`,
      {
        end_date: new Date(),
        signature_id: signatureId,
      }
    );

    const delivery = response.data;

    yield put(confirmDeliverySuccess(delivery));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      err && err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Houve um erro ao confirmar entrega'
    );
    yield put(confirmDeliveryFailure());
  }
}

export default all([
  takeLatest('@delivery/CONFIRM_PICKUP_REQUEST', confirmPickup),
  takeLatest('@delivery/CONFIRM_DELIVERY_REQUEST', confirmDelivery),
]);
