import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
// import persistStore from 'redux-persist/es/persistStore';
// import {PersistGate} from 'redux-persist/lib/integration/react';
import store from './src/features/app/Store';

const App = () => {
  // let persisterStore = persistStore(store);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persisterStore}> */}
      <Main />
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
