import { API } from "./constants.api";
// import queryString from "query-string"
import { URL_API } from "Api";

export const UserAPI = {
  getProfileUser: (id)=> API.get(`${URL_API}/users/${id}`), 
  editProfileUser:(id,data)=> API.patch(`${URL_API}/users`,id,data),
}