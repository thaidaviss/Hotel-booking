import { createReducer } from "@reduxjs/toolkit";
import { USER_ACTION, FAILURE, REQUEST, SUCCESS } from "redux/constants";


const initialState = {
  userInfo:{
    data: JSON.parse(localStorage.getItem("userData"))||{},
    load: false,
    error: null,
  }
};

export const userReducer = createReducer(initialState, {
  [REQUEST(USER_ACTION.LOGIN)]: (state, action) => {
    localStorage.removeItem("userData");
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.LOGIN)]: (state, action) => {
    const { data } = action.payload;
    localStorage.setItem("userData",JSON.stringify(data));
    return {
      ...state,
      userInfo: {
        data,
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(USER_ACTION.LOGIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: false,
        error,
      },
    }
  },
//register
  [REQUEST(USER_ACTION.REGISTER)]: (state, action) => {
    localStorage.removeItem("userData")
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(USER_ACTION.REGISTER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: false,
        error,
      },
    }
  },
  //logout
  [REQUEST(USER_ACTION.LOGOUT)]: (state, action) => {
    localStorage.removeItem("userData")
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.LOGOUT)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(USER_ACTION.LOGOUT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        load: false,
        error,
      },
    }
  },
});
