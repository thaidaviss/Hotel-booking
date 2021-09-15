export const BOOKING_ACTION = {
  CREATE_BOOKING: "BOOKING_ROOM",
  GET_LIST_BOOKING: "GET_LIST_BOOKING",
}

export const checkVariable = (checkIn, checkOut, listBooking, listRoom) => {
  var listVariable = {};
  for (var i = 0; i < listRoom.length; i++) {
    var check = true;
    for (var j = 0; j < listBooking.length; j++) {
      if (listRoom[i].id === listBooking[j].roomId) {
        if ((checkIn >= listBooking[j].checkIn) && (checkIn <= listBooking[j].checkOut)) {
          check = false;
          break;
        }
        if ((checkIn <= listBooking[j].checkIn) && (checkOut >= listBooking[j].checkIn)) {
          check = false;
          break;
        }
      }
    }
    if (check === true) {
      if (Array.isArray(listVariable[listRoom[i].typeRoomId])) {
        listVariable[listRoom[i].typeRoomId].push(listRoom[i].id);
      } else {
        listVariable[listRoom[i].typeRoomId] = [listRoom[i].id];

      }
    }
  }

  return listVariable;
}