export function signInRequest(deliverymenId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { deliverymenId },
  };
}

export function signInSuccess(deliverymen) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { deliverymen },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
