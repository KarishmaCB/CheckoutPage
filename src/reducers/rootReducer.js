import { combineReducers } from 'redux';
import checkoutReducer from './checkoutReducer';

export const reducer = combineReducers({
  checkout: checkoutReducer,
  // Add other reducers here if needed
});
