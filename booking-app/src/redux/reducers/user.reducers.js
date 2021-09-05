import {
  createReducer
} from "@reduxjs/toolkit";

import {
  FAIL,
  REQUEST,
  SUCCESS,
  USER
} from "../constants";


const initialState = {
  userInfo: {
    data: {},
    loading: false,
    error: null,
  },
}

const userReducer = createReducer(initialState, {
  [REQUEST(USER.LOGIN)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,
        error: null
      },
    };
  },
  [FAIL(USER.LOGIN)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: false,
        error: "tài khoản hoặc mật khẩu không chính xác!"
      },
    };
  },
  [SUCCESS(USER.LOGIN)]: (state, action) => {
    localStorage.setItem("userData", JSON.stringify(action.payload));
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: action.payload,
        loading: false,
        error: null,
      },
    };
  },
  [REQUEST(USER.CHECK_LOGIN)]: (state, action) => {
    return {
      ...state,
    };
  },
  [FAIL(USER.CHECK_LOGIN)]: (state, action) => {
    localStorage.removeItem('userData');
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: false,
        error: null,
      },
    };
  },
  [SUCCESS(USER.CHECK_LOGIN)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: action.payload,

      },
    };
  },
  [REQUEST(USER.LOGOUT)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,

      },

    };
  },
  [SUCCESS(USER.LOGOUT)]: (state, action) => {
    localStorage.removeItem('userData');
    return {
      ...state,
      userInfo: {
        data: {},
        loading: false,
        error: null
      },
    };
  },
  [FAIL(USER.LOGOUT)]: (state, action) => {

    return {
      ...state,
      userInfo: {
        data: {},
        loading: false,
        error: null
      },
    };
  },
  [REQUEST(USER.REGISTER)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,
      }
    };
  },
  [SUCCESS(USER.REGISTER)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,

        loading: false,
        error: null
      }
    };
  },
  [FAIL(USER.REGISTER)]: (state, action) => {
   
    return {
      ...state,

      userInfo: {
        ...state.userInfo,
        loading: false,
        error: action.payload,
      }
    };
  }

});

export default userReducer;