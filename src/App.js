import React from 'react'
import Main from './pages/Main';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {store, persistor} from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main /> 
      </PersistGate>
    </Provider>
  );
}

export default App;
