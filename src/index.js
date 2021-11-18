import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore'
import MainLayout from './components/MainLayout';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainLayout/>
    </Provider>
  </BrowserRouter>
  ,document.getElementById('root')
);