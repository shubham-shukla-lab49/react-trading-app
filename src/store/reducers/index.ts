import { combineReducers } from 'redux';
import trades from './tradesReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    trades
});
export default rootReducer;