import {combineReducers, configureStore, Tuple} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers';
import {reduxStorage} from '@src/common/storage/mmkvStorage';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['currentUser'],
  debug: __DEV__,
};

const mainReducer = combineReducers({
  root: persistReducer(persistConfig, rootReducer),
});

const middlewares: any[] = [thunk];

export const store = configureStore({
  reducer: mainReducer,
  middleware: () => new Tuple(...middlewares),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
