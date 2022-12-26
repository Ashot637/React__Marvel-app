import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { HashRouter } from 'react-router-dom';
import './style/style.scss';

ReactDOM.render(
      <HashRouter basename='/React__Marvel-app'>
        <App />
      </HashRouter>,
    document.getElementById('root')
)


