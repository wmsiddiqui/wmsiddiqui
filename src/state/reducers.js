import { combineReducers } from 'redux';

import githubReducer from './github/githubReducer';

export default combineReducers({ githubReducer });
