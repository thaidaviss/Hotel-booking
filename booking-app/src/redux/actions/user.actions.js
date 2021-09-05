import {
  createAction
} from "@reduxjs/toolkit";
import { REQUEST, USER } from "../constants";

export const loginAction = createAction(REQUEST(USER.LOGIN));
export const logoutAction = createAction(REQUEST(USER.LOGOUT));
export const registerAction = createAction(REQUEST(USER.REGISTER));
export const checkLoginAction = createAction(REQUEST(USER.CHECK_LOGIN));