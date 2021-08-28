import { API } from "./constants.api";
import queryString from "query-string"

export const UserAPI = {
  getProfileUser: (id)=> API.get(`${url}/users/${id}`),
  
  editProfileUser:(id,data)=> API.patch(`${url}/users`,id,data),
}