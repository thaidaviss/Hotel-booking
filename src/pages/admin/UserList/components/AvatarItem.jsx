import { Image } from 'antd';
import React from 'react';

const AvatarItem = (props) => {
  const { avatar, value } =props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image className="avatar" width={40} src={avatar[0]} style={{ borderRadius: "50%" }} />
      <p style={{ paddingLeft: "1rem" }}>{value}</p>
    </div>
  );
}

export default AvatarItem;