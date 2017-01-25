import { combineReducers } from 'redux';
import global from './global/globalReducer';
import employment from './containers/Employment/redux/employmentReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer,
    global,
    employment
});

export default rootReducer;
