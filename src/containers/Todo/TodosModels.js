import { Map, Record, List } from 'immutable';

export const initialState = {
  todoPage: new Map({
    currentInput: '',
    aboutOpen: true,
    todos: new List([])
  })
}

export const TodoItem = new Record({
  text: '',
  checked: 'false'
})
