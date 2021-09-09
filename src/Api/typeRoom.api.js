import { API } from "./constants.api";
import queryString from "query-string"
import { URL_API } from "Api";


export const typeRoomAPI = {
  getTypeRoomList:()=>API.get(`${URL_API}/typeRooms`),
  getTypeRoomDetail: (id,params)=>API.get(`${URL_API}/typeRooms/${id}?${queryString.stringify(params)}`),
  getFilterTypeRoomList:(params)=> API.get(`${URL_API}/typeRooms?${queryString.stringify(params)}`),
  addTypeRoomToList:(data) => API.post(`${URL_API}/typeRooms`,data),
  deleteTypeRoomInList: (id)=> API.delete(URL_API,id),
  editTypeRoomInList:(id,data)=> API.patch(URL_API,id,data),
  
}