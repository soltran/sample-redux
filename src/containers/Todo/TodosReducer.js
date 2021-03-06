import {initialState, TodoItem } from './TodosModels';

export default function todoReducer(state = initialState.todoPage, action) {


  // --------   Logic to handle actions here  ----------- ..

  const initializePage = (state) => state.set('isInitialized', true);

  const changeInput = (state, newValue) => state.set('currentInput', newValue);

  const addTodo = (state, text) => state.set('todos', state.get('todos').unshift(new TodoItem({text})));

  const toggleAbout = (state) => state.set('aboutOpen', !state.get('aboutOpen'));

  // prepend all actions with ROOT_NAME
  const actions = {
    'todos/CHANGE_INPUT': () => changeInput(state, action.value),
    'todos/ADD_TODO': () => addTodo(state, action.text),
    'todos/TOGGLE_ABOUT': () => toggleAbout(state),
    'DEFAULT': () => state,
  }

  return ((action && actions[action.type]) ? actions[action.type] : actions['DEFAULT'])()
}
