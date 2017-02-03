import { combineReducers } from 'redux';
import global from './global/globalReducer';
import employment from './containers/Employment/redux/employmentReducer';
import toDoPage from './containers/ToDo/ToDosReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer,
    toDoPage,
    global,
    employment
});

export default rootReducer;
