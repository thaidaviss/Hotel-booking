import { combineReducers } from 'redux';
import roomReducer from './room.reducer';
import typeReducer from './type.reducer';
import userReducer from './user.reducer';
import discountReducer from './discount.reducer';
import locationReducer from './location.reducer';


export const rootReducer =  combineReducers({
  roomReducer: roomReducer,
  locationReducer: locationReducer,
  discountReducer: discountReducer,
  typeReducer: typeReducer,
  userReducer: userReducer,
});