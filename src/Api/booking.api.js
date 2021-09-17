import { URL_API } from "Api";
import queryString from "query-string"
import { API } from "./constants.api";

export const BookingAPI = {
 getBookingList:()=> API.get(`${URL_API}/bookings`),
 getFilterBookingList:(params)=> API.get(`${URL_API}/bookings?${queryString.stringify(params)}`),
 getHistoryBookingList: (idUser)=>API.get(`${URL_API}/bookings?idUser=${idUser}`),
 addBooking:(id,data)=> API.patch(`${URL_API}/bookings`,id,{...data,status:"pending"}),
 cancelBooking: (id,data)=> API.patch(`${URL_API}/bookings`,id,{...data,status:"canceled"}),
 checkOutBooking: (id,data)=> API.patch(`${URL_API}/bookings`,id,{...data,status:"check-out"}),
 checkInBooking: (id,data)=> API.patch(`${URL_API}/bookings`,id,{...data,status:"check-in"}),
}