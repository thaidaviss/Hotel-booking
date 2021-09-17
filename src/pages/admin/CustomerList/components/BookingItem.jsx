import { Image } from 'antd';
import React, { useState } from 'react';

const BookingItem = (props) => {
  const { value, typeList } =props;
  const type = typeList.data.find((typeItem, typeIndex) => typeItem.id === value.bookings.typeRoomId);
  return (
    <div>
      {value.map((item, index) => {
        return (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p>Type: {type}</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}

export default BookingItem;