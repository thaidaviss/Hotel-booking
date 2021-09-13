import { URL_API } from "Api";
import { API } from "./constants.api";

export const BookingAPI = {
 addBooking:(data)=> API.post(`${URL_API}/bookings`,{...data,status:"booked"}),

 getHistoryBooking: (idUser)=>API.get(`${URL_API}/bookings?idUser=${idUser}`),

 cancelBooking: (id,data)=> API.patch(`${URL_API}/bookings`,id,{...data,status:"canceled"}),

 checkOutBooking: (id,data)=> API.patch(`${URL_API}/bookings`,id,{...data,status:"check in"}),
 
 checkInBooking: (id,data)=> API.patch(`${URL_API}/bookings`,id,{...data,status:"check Out"}),
}