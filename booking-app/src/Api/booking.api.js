import { API } from "./constants.api";

export const BookingAPI = {
 addBooking:(data)=> API.post(`${url}/orders`,{...data,status:"booked"}),
 getHistoryBooking: (idUser)=>API.get(`${url}/orders?idUser=${idUser}`),
 cancelBooking: (id)=> API.patch(`${url}/orders`,id,{...data,status:"canceled"}),
 checkOutlBooking: (id)=> API.patch(`${url}/orders`,id,{...data,status:"check in"}),
 checkInlBooking: (id)=> API.patch(`${url}/orders`,id,{...data,status:"check Out"}),
}