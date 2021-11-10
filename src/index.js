import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import Navigation from './components/Navigation';

ReactDOM.render(
  <BrowserRouter>
    <Navigation/>
    <Routes/>
  </BrowserRouter>
  ,document.getElementById('root')
);