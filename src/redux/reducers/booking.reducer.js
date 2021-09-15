import {
  createReducer
} from "@reduxjs/toolkit";
import {
  BOOKING_ACTION,
  FAILURE,
  REQUEST,
  SUCCESS
} from "redux/constants/index";


const initialState = {
  bookingList: {
    data: [],
    load: false,
    error: null,
  }


}

const bookingReducer = createReducer(initialState, {
  [REQUEST(BOOKING_ACTION.GET_LIST_BOOKING)]: (state, action) => {
    return {
      ...state,
      bookingList: {
        ...state.bookingList,
        load: true,
      },
    };
  },
  [SUCCESS(BOOKING_ACTION.GET_LIST_BOOKING)]: (state, action) => {
    const {
      data
    } = action.payload;
    return {
      ...state,
      bookingList: {
        ...state.bookingList,
        data,
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(BOOKING_ACTION.GET_LIST_BOOKING)]: (state, action) => {
    const {
      error
    } = action.payload;
    return {
      ...state,
      bookingList: {
        ...state.bookingList,
        load: false,
        error,
      },
    }
  },
  ///////////////////////////////////////

  [REQUEST(BOOKING_ACTION.CREATE_BOOKING)]: (state, action) => {
    return {
      ...state,
      bookingList: {
        ...state.bookingList,
        load: true,
      },
    };
  },
  [SUCCESS(BOOKING_ACTION.CREATE_BOOKING)]: (state, action) => {
    const {
      data
    } = action.payload;
    const NewListBooking = [...state.bookingList.data];
    NewListBooking.push(data);
    return {
      ...state,
      bookingList: {
        data: NewListBooking,
        load: false,
        error: null,
      },
    }
  },
  [FAILURE(BOOKING_ACTION.CREATE_BOOKING)]: (state, action) => {
    const {
      error
    } = action.payload;
    return {
      ...state,
      bookingList: {
        ...state.bookingList,
        load: false,
        error,
      },
    }
  }

});

export default bookingReducer;