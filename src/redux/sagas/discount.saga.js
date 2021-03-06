import {
  put,
  takeEvery
} from "@redux-saga/core/effects";
import {
  notification
} from "antd";
import {
  DiscountAPI
} from "Api";
import {
  DISCOUNT_ACTION,
  FAILURE,
  REQUEST,
  SUCCESS
} from "redux/constants";


function* getDiscountListSaga(action) {
  try {
    const result = yield DiscountAPI.getFilterDiscountList({
      _sort: 'id',
      _order: 'desc'
    });
    yield put({
      type: SUCCESS(DISCOUNT_ACTION.GET_DISCOUNT_LIST),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({
      type: FAILURE(DISCOUNT_ACTION.GET_DISCOUNT_LIST),
      payload: e.message
    });
  }
}

function* createDiscountSaga(action) {
  try {
    const {
      data
    } = action.payload;
    const result = yield DiscountAPI.addDiscountToList(data);
    yield put({
      type: SUCCESS(DISCOUNT_ACTION.CREATE_DISCOUNT),
      payload: {
        data: result.data
      },
    });
  } catch (e) {
    yield put({
      type: FAILURE(DISCOUNT_ACTION.CREATE_DISCOUNT),
      payload: e.message
    });
  }
}

function* editDiscountSaga(action) {
  try {
    const {
      id,
      data
    } = action.payload;
    const result = yield DiscountAPI.editDiscountInList(id, data);
    yield put({
      type: SUCCESS(DISCOUNT_ACTION.EDIT_DISCOUNT),
      payload: {
        data: result.data,
      }
    });
  } catch (e) {
    yield put({
      type: FAILURE(DISCOUNT_ACTION.EDIT_DISCOUNT),
      payload: e.message
    });
  }
}

function* deleteDiscountSaga(action) {
  try {
    const {
      id
    } = action.payload;
    yield DiscountAPI.checkDiscount(id);
    yield put({
      type: SUCCESS(DISCOUNT_ACTION.DELETE_DISCOUNT),
      payload: id
    });
  } catch (e) {
    yield put({
      type: FAILURE(DISCOUNT_ACTION.DELETE_DISCOUNT),
      payload: e.message
    });
  }
}

function* getDiscountDetail(action) {
  try {
    const {
      name
    } = action.payload;
    const result = yield DiscountAPI.checkDiscount(name);


    if (result.data.length === 0) {

      notification.info({
        description: "The discount code has expired or is incorrect!"
      });
    } else {
      notification.success({
        description: `you have added ${result.data[0].value}% off code!`
      });
    }
    yield put({
      type: SUCCESS(DISCOUNT_ACTION.GET_DISCOUNT_DETAIL),
      payload: result.data
    });
  } catch (e) {
    yield put({
      type: FAILURE(DISCOUNT_ACTION.GET_DISCOUNT_DETAIL),
      payload: e.message
    });
  }
}



export default function* discountSaga() {
  yield takeEvery(REQUEST(DISCOUNT_ACTION.GET_DISCOUNT_LIST), getDiscountListSaga);
  yield takeEvery(REQUEST(DISCOUNT_ACTION.CREATE_DISCOUNT), createDiscountSaga);
  yield takeEvery(REQUEST(DISCOUNT_ACTION.EDIT_DISCOUNT), editDiscountSaga);
  yield takeEvery(REQUEST(DISCOUNT_ACTION.DELETE_DISCOUNT), deleteDiscountSaga);
  yield takeEvery(REQUEST(DISCOUNT_ACTION.GET_DISCOUNT_DETAIL), getDiscountDetail);
}