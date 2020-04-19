import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  success: false,
};

export default function problem(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problem/CREATE_REQUEST': {
        draft.loading = true;
        draft.success = false;
        break;
      }
      case '@problem/CREATE_SUCCESS': {
        draft.loading = false;
        draft.success = true;
        break;
      }
      case '@problem/CREATE_FAILURE': {
        draft.loading = false;
        draft.success = false;
        break;
      }
      case '@problem/RESET_REQUEST': {
        draft.loading = false;
        draft.success = false;
        break;
      }
      default:
    }
  });
}
