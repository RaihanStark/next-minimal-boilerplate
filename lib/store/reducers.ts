import { combineReducers } from '@reduxjs/toolkit';

import blogReducer from './slices/blog';

export default combineReducers({
  blog: blogReducer,
});
