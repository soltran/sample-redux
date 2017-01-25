import { combineReducers } from 'redux';
import global from './global/globalReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer,
    global
})

export default rootReducer;
