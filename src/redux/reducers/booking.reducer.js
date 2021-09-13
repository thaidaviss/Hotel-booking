import {
  createReducer
} from "@reduxjs/toolkit";
import {
  ROOM_ACTION,
  FAILURE,
  REQUEST,
  SUCCESS
} from "redux/constants/index";


const initialState = {
  listRoom: {
    
  },
  load: false,
  error: null,

}

const bookingReducer = createReducer(initialState, {
  [REQUEST(ROOM_ACTION.GET_ROOM_LIST)]: (state, action) => {
    return {
      ...state,
      roomList: {
        ...state.roomList,
        load: true,
      },
    };
  },
  [SUCCESS(ROOM_ACTION.GET_ROOM_LIST)]: (state, action) => {
    const {
      data
    } = action.payload;
    return {
      ...state,
      roomList: {
        ...state.roomList,
        data,
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(ROOM_ACTION.GET_ROOM_LIST)]: (state, action) => {
    const {
      error
    } = action.payload;
    return {
      ...state,
      roomList: {
        ...state.roomList,
        load: false,
        error,
      },
    }
  }


});

export default bookingReducer;