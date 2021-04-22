import { combineReducers } from 'redux';
import videoReducer from './VideoReducer';
const rootReducers = combineReducers({
    playerData: videoReducer
});
export default rootReducers;