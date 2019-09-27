import { applyMiddleware,createStore, compose } from "redux";
import reducer from './reducer'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './reduxSaga'
const logger = createLogger({
    // ...options
    level : 'log' // console's level
    
  });
  const sagaMiddleware = createSagaMiddleware()
  const enhancer = compose(applyMiddleware(sagaMiddleware))

export const storeState = createStore(reducer, enhancer);
sagaMiddleware.run(rootSaga)
