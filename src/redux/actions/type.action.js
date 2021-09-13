import { createAction } from "@reduxjs/toolkit";
import { TYPE_ACTION, REQUEST } from "redux/constants";


export const getFilterTypeListAction = createAction(REQUEST(TYPE_ACTION.GET_FILTER_TYPE_LIST));
export const getTypeListAction = createAction(REQUEST(TYPE_ACTION.GET_TYPE_LIST));
export const createTypeAction = createAction(REQUEST(TYPE_ACTION.CREATE_TYPE));
export const editTypeAction = createAction(REQUEST(TYPE_ACTION.EDIT_TYPE));
export const deleteTypeAction = createAction(REQUEST(TYPE_ACTION.DELETE_TYPE));