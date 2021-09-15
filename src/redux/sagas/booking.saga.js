import { put, takeEvery } from "@redux-saga/core/effects";
import { BookingAPI } from "Api/index";
import { BOOKING_ACTION, FAILURE, REQUEST, SUCCESS } from "redux/constants";


function* getListBookingSaga(action) {
  try {
    const result = yield BookingAPI.getListBooking();
    yield put({
      type: SUCCESS(BOOKING_ACTION.GET_LIST_BOOKING),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(BOOKING_ACTION.GET_LIST_BOOKING), payload: e.message });
  }
}
function* createBookingSaga(action) {
  const {data} = action.payload;
  try {
    const result = yield BookingAPI.addBooking(data);
    yield put({
      type: SUCCESS(BOOKING_ACTION.CREATE_BOOKING),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(BOOKING_ACTION.CREATE_BOOKING), payload: e.message });
  }
}







export default function* bookingSaga() {
  yield takeEvery(REQUEST(BOOKING_ACTION.GET_LIST_BOOKING), getListBookingSaga);
  yield takeEvery(REQUEST(BOOKING_ACTION.CREATE_BOOKING), createBookingSaga);
}