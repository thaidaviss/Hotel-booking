import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { FAILURE, TYPE_ACTION, REQUEST, SUCCESS } from "redux/constants";
import { URL_API } from "Api/index";


function* getTypeListSaga(action) {
  try {
    const result = yield axios.get(`${URL_API}/types`);
    yield put({
      type: SUCCESS(TYPE_ACTION.GET_TYPE_LIST),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(TYPE_ACTION.GET_TYPE_LIST), payload: e.message });
  }
}

function* createTypeSaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.post(`${URL_API}/types`, data);
    yield put({
      type: SUCCESS(TYPE_ACTION.CREATE_TYPE),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(TYPE_ACTION.CREATE_TYPE), payload: e.message });
  }
}

function* editTypeSaga(action) {
  try {
    const { id, data } = action.payload;
    const result = yield axios.patch(`${URL_API}/types/${id}`, data);
    yield put({
      type: SUCCESS(TYPE_ACTION.EDIT_TYPE),
      payload: {
        data: result.data,
      }
    });
  } catch (e) {
    yield put({ type: FAILURE(TYPE_ACTION.EDIT_TYPE), payload: e.message });
  }
}

function* deleteTypeSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`${URL_API}/types/${id}`);
    yield put({
      type: SUCCESS(TYPE_ACTION.DELETE_TYPE),
      payload: { id }
    });
  } catch (e) {
    yield put({ type: FAILURE(TYPE_ACTION.DELETE_TYPE), payload: e.message });
  }
}


export default function* typeSaga() {
  yield takeEvery(REQUEST(TYPE_ACTION.GET_TYPE_LIST), getTypeListSaga);
  yield takeEvery(REQUEST(TYPE_ACTION.CREATE_TYPE), createTypeSaga);
  yield takeEvery(REQUEST(TYPE_ACTION.EDIT_TYPE), editTypeSaga);
  yield takeEvery(REQUEST(TYPE_ACTION.DELETE_TYPE), deleteTypeSaga);
}