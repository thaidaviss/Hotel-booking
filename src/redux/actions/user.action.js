import { createAction } from "@reduxjs/toolkit";
import { REQUEST, USER_ACTION } from "redux/constants";


export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const logoutAction = createAction(REQUEST(USER_ACTION.LOGOUT));
export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const checkLoginAction = createAction(REQUEST(USER_ACTION.CHECK_LOGIN));