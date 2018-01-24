import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import Game from './containers/Game';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
