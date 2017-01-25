import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import {runSagas} from '../sagas';
import rootReducer from '../rootReducer';

function configureStoreProd(initialState) {

  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [
    // Add other middleware on this line...

    sagaMiddleware,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );

  // run the saga
  runSagas(sagaMiddleware)

  return store;
}

function configureStoreDev(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [
    // Add other middleware on this line...

    reduxImmutableStateInvariant(),
    sagaMiddleware
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  // run the sagas
  runSagas(sagaMiddleware)

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers').default; // eslint-disable-line global-require
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
