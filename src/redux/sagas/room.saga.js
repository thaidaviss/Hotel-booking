import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { FAILURE, REQUEST, ROOM_ACTION, SUCCESS } from "redux/constants/index";
import history from "utils/history";
import { RoomAPI, URL_API } from "Api";


function* getRoomListSaga(action) {
  try {
   
  
    const result = yield RoomAPI.getFilterRoomList({ _sort: 'id',_order: 'desc'});
    
    
    yield put({
      type: SUCCESS(ROOM_ACTION.GET_ROOM_LIST),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(ROOM_ACTION.GET_ROOM_LIST), payload: e.message });
  }
}

function* getRoomDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield RoomAPI.getRoomDetail(id,{_expand:"discounts"});
    yield put({
      type: SUCCESS(ROOM_ACTION.GET_ROOM_DETAIL),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({ type: FAILURE(ROOM_ACTION.GET_ROOM_DETAIL), payload: e.message });
  }
}

function* createRoomSaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.post(`${URL_API}/rooms`, data);
    yield put({
      type: SUCCESS(ROOM_ACTION.CREATE_ROOM),
      payload: {
        data: result.data,
      },
    });
    yield history.push("/admin/rooms");

  } catch (e) {
    yield put({ type: FAILURE(ROOM_ACTION.CREATE_ROOM), payload: e.message });
  }
}

function* editRoomSaga(action) {
  try {
    const { id, data } = action.payload;
    const result = yield axios.patch(`${URL_API}/rooms/${id}`, data);
    yield put({
      type: SUCCESS(ROOM_ACTION.EDIT_ROOM),
      payload: {
        data: result.data,
      }
    });
  } catch (e) {
    yield put({ type: FAILURE(ROOM_ACTION.EDIT_ROOM), payload: e.message });
  }
}

function* deleteRoomSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`${URL_API}/rooms/${id}`);
    yield put({
      type: SUCCESS(ROOM_ACTION.DELETE_ROOM),
      payload: { id }
    });
  } catch (e) {
    yield put({ type: FAILURE(ROOM_ACTION.DELETE_ROOM), payload: e.message });
  }
}

export default function* roomSaga() {
  yield takeEvery(REQUEST(ROOM_ACTION.GET_ROOM_LIST), getRoomListSaga);
  yield takeEvery(REQUEST(ROOM_ACTION.GET_ROOM_DETAIL), getRoomDetailSaga);
  yield takeEvery(REQUEST(ROOM_ACTION.CREATE_ROOM), createRoomSaga);
  yield takeEvery(REQUEST(ROOM_ACTION.EDIT_ROOM), editRoomSaga);
  yield takeEvery(REQUEST(ROOM_ACTION.DELETE_ROOM), deleteRoomSaga);
}