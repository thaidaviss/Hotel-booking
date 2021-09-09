import { URL_API } from "Api";
import { API } from "./constants.api";

export const BookingAPI = {
 addBooking:(data)=> API.post(`${URL_API}/orders`,{...data,status:"booked"}),

 getHistoryBooking: (idUser)=>API.get(`${URL_API}/orders?idUser=${idUser}`),

 cancelBooking: (id,data)=> API.patch(`${URL_API}/orders`,id,{...data,status:"canceled"}),

 checkOutBooking: (id,data)=> API.patch(`${URL_API}/orders`,id,{...data,status:"check in"}),
 
 checkInBooking: (id,data)=> API.patch(`${URL_API}/orders`,id,{...data,status:"check Out"}),
}