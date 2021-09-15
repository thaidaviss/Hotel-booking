import { URL_API } from "Api";
import { API } from "./constants.api";

export const BookingAPI = {
  getBookingList: () => API.get(`${URL_API}/bookings`),

  addBooking: (data) =>
    API.post(`${URL_API}/bookings`, { ...data, status: "booked" }),

  getBookingDetail: (idUser) => API.get(`${URL_API}/bookings?idUser=${idUser}`),

  cancelBooking: (id, data) =>
    API.patch(`${URL_API}/bookings`, id, { ...data, status: "canceled" }),

  checkOutBooking: (id, data) =>
    API.patch(`${URL_API}/bookings`, id, { ...data, status: "check-in" }),

  checkInBooking: (id, data) =>
    API.patch(`${URL_API}/bookings`, id, { ...data, status: "check-out" }),
};