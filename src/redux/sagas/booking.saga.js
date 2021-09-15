import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { FAILURE, BOOKING_ACTION, REQUEST, SUCCESS } from "redux/constants";
import { URL_API,BookingAPI } from "Api/index";


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





export default function* bookingSaga() {
  yield takeEvery(REQUEST(BOOKING_ACTION.GET_LIST_BOOKING), getListBookingSaga);
 
}