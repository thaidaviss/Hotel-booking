import { Image } from 'antd';
import React, { useState } from 'react'

const ImageSliderItem = (props) => {
  const {images,value} =props;
  const [ visible, setVisible ] = useState(false);
  return (
  
       <div style={{ display: "flex", alignItems: "center" }}>
            <Image
            className="img"
            preview={{ visible: false }}
            width={50}
              src={images[0]}
              onClick={() => setVisible(true)}
            />
            <p style={{ paddingLeft: "1rem" }}>{value}</p>
            <div style={{ display: "none" }}>
              
              <Image.PreviewGroup
              
                preview={{visible, onVisibleChange: (boolean) => setVisible(boolean) }}
              >
                {
                  images.map((image)=><Image src={image} />)
                }
              </Image.PreviewGroup>
            </div>
       
    </div>
  )
}

export default ImageSliderItem
