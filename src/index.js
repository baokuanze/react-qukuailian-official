import React from 'react';
import ReactDOM from 'react-dom';
import RouterContaner from './router';
import registerServiceWorker from './registerServiceWorker';
import './style/reset.css';
import './style/common.css';
import 'animate.css'
ReactDOM.render(<RouterContaner />, document.getElementById('root'));
registerServiceWorker();
