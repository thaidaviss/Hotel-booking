import { fork } from "redux-saga/effects";
import locationSaga from "./location.saga";
import roomSaga from "./room.saga";
import typeSaga from "./type.saga";
import userSaga from "./user.saga";

function* rootSaga() {
  yield fork(roomSaga);
  yield fork(locationSaga);
  yield fork(typeSaga);
  yield fork(userSaga);
};

export default rootSaga;