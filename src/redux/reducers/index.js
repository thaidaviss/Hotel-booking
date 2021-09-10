import { combineReducers } from 'redux';
import locationReducer from './location.reducer';
import roomReducer from './room.reducer';
import typeReducer from './type.reducer';


export const rootReducer =  combineReducers({
  roomReducer: roomReducer,
  locationReducer: locationReducer,
  typeReducer: typeReducer,
});