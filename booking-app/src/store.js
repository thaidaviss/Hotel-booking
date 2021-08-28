import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./redux";
import rootSaga from "./redux/sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:rootReducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
export default store;