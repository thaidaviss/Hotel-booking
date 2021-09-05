
import { authAPI } from 'Api';
import { ROUTER_URL } from 'constants/index';
import {
   put,
   takeEvery
} from 'redux-saga/effects'
import history from '../../utils/history';
import {
   FAIL,
   REQUEST,
   SUCCESS,
   USER,
} from '../constants';


function* login(action) {
   try {
      const {
         data
      } = action.payload
      const response = yield authAPI.login(data);
      yield put({
         type: SUCCESS(USER.LOGIN),
         payload: response.data
      });
   } catch (e) {
      yield put({
         type: FAIL(USER.LOGIN),
         message: e.message
      });

   }
}

// function* checkLogin(action) {

//   try {
//      const {
//         accessToken,
//      } = action.payload;

//      const response = yield axios({
//         method: 'get',
//         url: `${URL_SERVER_BASE}/660/products?1`,
//         headers: {
//            Authorization: `Bearer ${accessToken}`
//         }
//      });

//      yield put({
//         type: SUCCESS(USER.CHECK_LOGIN),
//         payload: action.payload
//      });
//   } catch (e) {
//      yield put({
//         type: FAIL(USER.CHECK_LOGIN),
//         message: e.message
//      });
//   }
// }

function* logout(action) {


   try {

      yield put({
         type: SUCCESS(USER.LOGOUT),
         payload: action.payload
      });
   } catch (e) {
      yield put({
         type: FAIL(USER.LOGOUT),
         message: e.message
      });
   }
}

function* register(action) {
   try {
      const {
         data
      } = action.payload;
      console.log(data)
      const response = yield authAPI.register(data);
      yield put({
         type: SUCCESS(USER.REGISTER),
         payload: response.data
      });
      yield history.replace(ROUTER_URL.LOGIN);
   } catch (e) {

      yield put({
         type: FAIL(USER.REGISTER),
         payload: e.response.data
      });

   }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* userSaga() {
   yield takeEvery(REQUEST(USER.LOGIN), login);
   yield takeEvery(REQUEST(USER.REGISTER), register);
   yield takeEvery(REQUEST(USER.LOGOUT), logout);
   // yield takeEvery(REQUEST(USER.CHECK_LOGIN), checkLogin);
}
export default userSaga;