import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import {store, persistor} from './store';
import {ActivityIndicator} from 'react-native';

const Redux = ({children}) => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default Redux;
