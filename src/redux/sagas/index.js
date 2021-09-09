import { fork } from "redux-saga/effects";
import locationSaga from "./location.saga";
import roomSaga from "./room.saga";
import typeSaga from "./type.saga";

function* rootSaga() {
  yield fork(roomSaga);
  yield fork(locationSaga);
  yield fork(typeSaga);
};

export default rootSaga;