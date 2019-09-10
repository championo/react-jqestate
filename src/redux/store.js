import { createStore } from 'redux';
/* eslint-disable import/no-extraneous-dependencies */
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

export default createStore(reducer, devToolsEnhancer());
