import { Image } from "antd";
import React, { useState } from "react";

const ImageSliderItem = (props) => {
  const { images, value } = props;
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image
        className="img"
        preview={{ visible: false }}
        width={100}
        src={images[0]}
        onClick={() => setVisible(true)}
      />
      <p style={{ paddingLeft: "1rem" }}>{value}</p>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (boolean) => setVisible(boolean),
          }}
        >
          {images.map((imageItem, imageIndex) => (
            <Image key={`item-${imageIndex}`} src={imageItem} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default ImageSliderItem;
