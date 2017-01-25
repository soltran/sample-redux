import { Map } from 'immutable';

const initialState = {
  employment: new Map({
    isInitialized: false,
    data: {}
  })
}

export default function employmentReducer(state = initialState.employment, action) {


  // --------   Logic to handle actions here  ----------- ..

  const initializePage = (state) => state.set('isInitialized', true);

  // prepend all actions with ROOT_NAME
  const actions = {
    'employment/INITIALIZE_PAGE': () => initializePage(state),
    'DEFAULT': () => state,
  }

  return ((action && actions[action.type]) ? actions[action.type] : actions['DEFAULT'])()
}
