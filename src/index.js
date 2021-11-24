import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './store/configureStore';
import MainLayout from './components/MainLayout';

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <MainLayout/>
      </Provider>
    </PersistGate>
  </BrowserRouter>
  ,document.getElementById('root')
);