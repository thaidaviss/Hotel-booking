import { fork } from "redux-saga/effects";
import userSaga from "./user.sagas";

function* rootSaga() {
  //   yield spawn(productSaga)
  // yield spawn(todoSaga)
// yield fork(productSaga);
// yield fork(todoSaga);
yield fork(userSaga);
// yield fork(cartSaga);
// yield fork (commentSaga);
}
export default  rootSaga;