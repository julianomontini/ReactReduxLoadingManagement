import { combineReducers } from 'redux';
import { errorReducer as error } from './errorReducer';
import { loadingReducer as loading } from './loadingReducer';
import { messageReducer as messages } from './messageReducer';

const rootReducer = combineReducers({
  error,
  loading,
  messages
});

export default rootReducer;
