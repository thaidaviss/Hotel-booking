import { createAction } from "@reduxjs/toolkit";
import { BOOKING_ACTION, REQUEST } from "redux/constants";
export const getListBookingAction = createAction(REQUEST(BOOKING_ACTION.GET_LIST_BOOKING));
export const createBookingAction = createAction(REQUEST(BOOKING_ACTION.CREATE_BOOKING));