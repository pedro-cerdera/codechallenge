import Reducers from '../reducers';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

import {middlewares} from './middlewares';

const reducers = combineReducers({
  ...Reducers,
});

const persistedReducers = persistReducer(config, reducers);

const compositions = [applyMiddleware(...middlewares)];

const composer = compose(...compositions);

const store = createStore(persistedReducers, composer);

let persistor = persistStore(store);

export {store, persistor};
