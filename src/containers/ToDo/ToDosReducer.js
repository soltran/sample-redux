import { Map, Record, List } from 'immutable';

const initialState = {
  toDoPage: new Map({
    currentInput: '',
    toDos: new List([])
  })
}

export default function todoReducer(state = initialState.toDoPage, action) {


  // --------   Logic to handle actions here  ----------- ..

  const initializePage = (state) => state.set('isInitialized', true);

  const changeInput = (state, newValue) => state.set('currentInput', newValue);

  const addTodo = (state, text) => state.set('toDos', state.get('toDos').push({text}));

  // prepend all actions with ROOT_NAME
  const actions = {
    'todos/CHANGE_INPUT': () => changeInput(state, action.value),
    'todos/ADD_TODO': () => addTodo(state, action.text),
    'DEFAULT': () => state,
  }

  return ((action && actions[action.type]) ? actions[action.type] : actions['DEFAULT'])()
}
