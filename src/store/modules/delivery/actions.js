export function confirmPickupRequest(data) {
  return {
    type: '@delivery/CONFIRM_PICKUP_REQUEST',
    payload: { data },
  };
}

export function confirmPickupSuccess(delivery) {
  return {
    type: '@delivery/CONFIRM_PICKUP_SUCCESS',
    payload: { delivery },
  };
}

export function confirmPickupFailure() {
  return {
    type: '@delivery/CONFIRM_PICKUP_FAILURE',
  };
}

export function confirmDeliveryRequest(data) {
  return {
    type: '@delivery/CONFIRM_DELIVERY_REQUEST',
    payload: { data },
  };
}

export function confirmDeliverySuccess(delivery) {
  return {
    type: '@delivery/CONFIRM_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}

export function confirmDeliveryFailure() {
  return {
    type: '@delivery/CONFIRM_DELIVERY_FAILURE',
  };
}

export function resetRequest() {
  return {
    type: '@delivery/RESET_REQUEST',
  };
}
