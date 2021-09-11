import {
  createReducer
} from "@reduxjs/toolkit";
import {
  FAILURE,
  REQUEST,
  SUCCESS,
  USER_ACTION
} from "../constants";



const initialState = {
  userInfo: {
    data: {},
    loading: false,
    error: null,
  },
}

const userReducer = createReducer(initialState, {
  [REQUEST(USER_ACTION.LOGIN)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,
        error: null
      },
    };
  },
  [FAILURE(USER_ACTION.LOGIN)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: false,
        error: action.payload
      },
    };
  },
  [SUCCESS(USER_ACTION.LOGIN)]: (state, action) => {
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
  [REQUEST(USER_ACTION.CHECK_LOGIN)]: (state, action) => {
    return {
      ...state,
    };
  },
  [FAILURE(USER_ACTION.CHECK_LOGIN)]: (state, action) => {
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
  [SUCCESS(USER_ACTION.CHECK_LOGIN)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: action.payload,

      },
    };
  },
  [REQUEST(USER_ACTION.LOGOUT)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,

      },

    };
  },
  [SUCCESS(USER_ACTION.LOGOUT)]: (state, action) => {
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
  [FAILURE(USER_ACTION.LOGOUT)]: (state, action) => {

    return {
      ...state,
      userInfo: {
        data: {},
        loading: false,
        error: null
      },
    };
  },
  [REQUEST(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,
        error:null
      }
    };
  },
  [SUCCESS(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,

        loading: false,
        error: null
      }
    };
  },
  [FAILURE(USER_ACTION.REGISTER)]: (state, action) => {
   
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