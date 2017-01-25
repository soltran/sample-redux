import { Map } from 'immutable';

const initialState = {
  global: new Map({
    screenWidth: typeof window === 'object' ? window.innerWidth : null,
    screenHeight: typeof window === 'object' ? window.innerHeight : null,
  })
}

export default function globalReducer(state = initialState.global, action) {


  // --------   Logic to handle actions here  ----------- ..

  const screenResize = (state, vw) => state.set('screenWidth', vw)

  // prepend all actions with ROOT_NAME
  const actions = {
    'SCREEN_RESIZE': () => screenResize(state, action.vw, action.vh),
    'DEFAULT': () => state,
  }

  return ((action && actions[action.type]) ? actions[action.type] : actions['DEFAULT'])()
}
