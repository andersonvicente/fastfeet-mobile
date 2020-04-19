import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeed',
      storage: AsyncStorage,
      whitelist: ['auth', 'deliverymen', 'problem', 'delivery'],
    },
    reducers
  );

  return persistedReducer;
};
