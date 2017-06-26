import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import globals from './style/globals.js'

// eslint-disable-next-line
injectGlobal`${globals}`;

ReactDOM.render(<AppContainer />,document.getElementById('root'));
registerServiceWorker();
