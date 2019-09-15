import { applyMiddleware,createStore } from "redux";
import reducer from './reducer'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagaFunctions from './reduxSaga'
const logger = createLogger({
    // ...options
    level : 'log' // console's level
    
  });
const sagaMiddleware = createSagaMiddleware()
export const storeState = createStore(reducer, applyMiddleware(logger,sagaMiddleware));
sagaMiddleware.run(sagaFunctions)
