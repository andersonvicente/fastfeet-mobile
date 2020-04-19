export function createRequest(data) {
  return {
    type: '@problem/CREATE_REQUEST',
    payload: { data },
  };
}

export function createSuccess(problem) {
  return {
    type: '@problem/CREATE_SUCCESS',
    payload: { problem },
  };
}

export function createFailure() {
  return {
    type: '@problem/CREATE_FAILURE',
  };
}

export function resetRequest() {
  return {
    type: '@problem/RESET_REQUEST',
  };
}
