import {combineReducers} from 'redux';
import loader from './loader';
import alert from './alert';
import currentUser from './currentUser';

const appReducer = combineReducers({
  loader,
  alert,
  currentUser,
});

// Define Root Reducer
const rootReducer = (state: any, action: any) => {
  if (action?.type == 'CLEAR_STATE') {
    return appReducer(action?.payload, {type: action?.type});
  }
  return appReducer(state, action);
};

export default rootReducer;
