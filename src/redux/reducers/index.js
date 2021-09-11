import { combineReducers } from 'redux';
import bookingReducer from './booking.reducer';
import { imageReducer } from './image.reducer';
import locationReducer from './location.reducer';
import roomReducer from './room.reducer';
import typeReducer from './type.reducer';
import { userReducer } from './user.reducer';
import userReducer from './user.reducer';


export const rootReducer =  combineReducers({
  roomReducer: roomReducer,
  locationReducer: locationReducer,
  typeReducer: typeReducer,
  userReducer:userReducer,
  imageReducer:imageReducer,
  bookingReducer:bookingReducer
});