import {
  action
} from '../../utils/actionUtils';

export const CHANGE_INPUT = 'todos/CHANGE_INPUT';
export const changeInput = (value) => action(CHANGE_INPUT, {value});

export const ADD_TODO = 'todos/ADD_TODO';
export const addTodo = (text) => action(ADD_TODO, {text});

export const TOGGLE_ABOUT = 'todos/TOGGLE_ABOUT';
export const toggleAbout = () => action(TOGGLE_ABOUT, {});
