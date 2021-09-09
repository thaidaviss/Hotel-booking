import {
  createReducer
} from "@reduxjs/toolkit";
import {
  FAIL,
  ROOM,
  REQUEST,
  SUCCESS
} from "../constants";

const initialState = {
  roomList: [],
  roomDetail: {},
  loading: false,
  error: "",
  pagination: {
    "_page": 1,
    "_limit": 10,
    "_totalRows":0
  }
}
const roomReducer = createReducer(initialState, {

  ///get room
  [REQUEST(ROOM.GET)]: (state, action) => {

    return {
      ...state,
      loading: true,
    };
  },
  [FAIL(ROOM.GET)]: (state, action) => {

    return {
      ...state,
      loading: false,
    };
  },
  [SUCCESS(ROOM.GET)]: (state, action) => {

    return {
      ...state,
      roomList: action.payload.data,
      pagination:action.payload.pagination,
      loading: false,
    }
  },
  
  [SUCCESS(ROOM.CREATE)]: (state, action) => {
    return {
      ...state,
      productList: [  
        action.payload,
        ...state.roomList,
      
      ],
    }
  },
  //// edit product
  [SUCCESS(ROOM.EDIT)]: (state, action) => {
    const {
      id
    } = action.payload;
    const newRoomList = [...state.roomList];
    const productIndex = newProductList.findIndex((product) => product.id === id);
    newProductList.splice(productIndex, 1, action.payload);
    return {
      ...state,
      productList: newProductList,
    };
  },
  ///delete product
  [SUCCESS(ROOM.DELETE)]: (state, action) => {
    const {
      id
    } = action.payload;
    const newProductList = [...state.productList];
    const productIndex = newProductList.findIndex((product) => product.id === id);
    newProductList.splice(productIndex, 1);
    return {
      ...state,
      productList: newProductList,
    };
  },
  [REQUEST(ROOM.DETAIL)]: (state, action) => {

    return {
      ...state,
      loading: true,
    };
  },
  [FAIL(ROOM.DETAIL)]: (state, action) => {

    return {
      ...state,
      loading: false,
    };
  },
  [SUCCESS(ROOM.DETAIL)]: (state, action) => {

    return {
      ...state,
      productDetail: action.payload[0],
      loading: false,
    }
  },

})

export default roomReducer;