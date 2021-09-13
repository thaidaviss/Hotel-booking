import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { FAILURE, LOCATION_ACTION, REQUEST, SUCCESS } from "redux/constants";
import { URL_API } from "Api/index";


function* getLocationListSaga(action) {
  try {
    const result = yield axios.get(`${URL_API}/locations`);
    yield put({
      type: SUCCESS(LOCATION_ACTION.GET_LOCATION_LIST),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(LOCATION_ACTION.GET_LOCATION_LIST), payload: e.message });
  }
}




export default function* bookingSaga() {
  // yield takeEvery(REQUEST(LOCATION_ACTION.GET_LOCATION_LIST), getLocationListSaga);
 
}