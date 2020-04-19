import { combineReducers } from 'redux';

import auth from './auth/reducer';
import deliverymen from './deliverymen/reducer';
import problem from './problem/reducer';
import delivery from './delivery/reducer';

export default combineReducers({
  auth,
  deliverymen,
  problem,
  delivery,
});
