import { API } from "./constants.api";
import queryString from "query-string"

export const RoomAPI = {
  getRoomList:(params)=> API.get(`${url}/rooms?${queryString.stringify(params)}`),
  addRoomToList:(data) => API.post(`${url}/rooms`,data),
  deleteRoomInList: (id)=> API.delete(url,id),
  editRoomInList:(id,data)=> API.patch(url,id,data),
  
}