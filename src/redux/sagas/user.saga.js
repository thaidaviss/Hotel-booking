
import { notification } from 'antd';
import { authAPI } from 'Api';
import { ROUTER_URL } from 'constants/index';
import {
   put,
   takeEvery
} from 'redux-saga/effects'
import history from '../../utils/history';
import {
   FAILURE,
   REQUEST,
   SUCCESS,
   USER_ACTION,
} from '../constants';


function* login(action) {
   try {
      const {
         data
      } = action.payload
      const response = yield authAPI.login(data);
      console.log(response.data);
      yield put({
         type: SUCCESS(USER_ACTION.LOGIN),
         payload: response,
      });
      yield  notification.success({
         description: "Login success!"  
      });
      
      if(response.data.user.role==="admin"){
         yield history.push(ROUTER_URL.ADMIN)
      }
      else{
         yield history.push(ROUTER_URL.HOME)
      }
   } catch (e) {
      yield put({
         type: FAILURE(USER_ACTION.LOGIN),
         payload: e.message
      });
      yield  notification.error({
         description:e.message
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
         type: SUCCESS(USER_ACTION.LOGOUT),
         payload: action.payload
      });
   } catch (e) {
      yield put({
         type: FAILURE(USER_ACTION.LOGOUT),
         message: e.message
      });
   }
}

function* register(action) {
   try {
      const {
         data
      } = action.payload;
      const response = yield authAPI.register(data);
      yield put({
         type: SUCCESS(USER_ACTION.REGISTER),
         payload: response.data
      });
    
      yield  notification.success({
         description: "Register success!"  
      });
      yield history.push(ROUTER_URL.LOGIN)
   } catch (e) {

      yield put({
         type: FAILURE(USER_ACTION.REGISTER),
         payload: e.response.data
      });
      yield  notification.error({
         description: e.response.data 
      });
   }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* userSaga() {
   yield takeEvery(REQUEST(USER_ACTION.LOGIN), login);
   yield takeEvery(REQUEST(USER_ACTION.REGISTER), register);
   yield takeEvery(REQUEST(USER_ACTION.LOGOUT), logout);
   // yield takeEvery(REQUEST(USER.CHECK_LOGIN), checkLogin);
}
export default userSaga;