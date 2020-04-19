import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  success: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/CONFIRM_PICKUP_REQUEST': {
        draft.loading = true;
        draft.success = false;
        break;
      }
      case '@delivery/CONFIRM_PICKUP_SUCCESS': {
        draft.loading = false;
        draft.success = true;
        break;
      }
      case '@delivery/CONFIRM_PICKUP_FAILURE': {
        draft.loading = false;
        draft.success = false;
        break;
      }
      case '@delivery/CONFIRM_DELIVERY_REQUEST': {
        draft.loading = true;
        draft.success = false;
        break;
      }
      case '@delivery/CONFIRM_DELIVERY_SUCCESS': {
        draft.loading = false;
        draft.success = true;
        break;
      }
      case '@delivery/CONFIRM_DELIVERY_FAILURE': {
        draft.loading = false;
        draft.success = false;
        break;
      }
      case '@delivery/RESET_REQUEST': {
        draft.loading = false;
        draft.success = false;
        break;
      }
      default:
    }
  });
}
