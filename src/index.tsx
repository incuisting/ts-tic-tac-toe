import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Game } from './components/Game';
import './index.css';

ReactDOM.render(
  <Game />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
