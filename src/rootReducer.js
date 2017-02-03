import { combineReducers } from 'redux';
import global from './global/globalReducer';
import employment from './containers/Employment/redux/employmentReducer';
import todoPage from './containers/Todo/TodosReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer,
    todoPage,
    global,
    employment
});

export default rootReducer;
