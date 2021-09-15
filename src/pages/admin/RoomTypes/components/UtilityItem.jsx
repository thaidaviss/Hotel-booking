import { Tag } from 'antd';
import React from 'react';


const UtilityItem = (props) => {
  const { value } = props;

  return (
    <>
      {value.map((item, index)=> (
        <div style={{ marginTop: ".7rem" }}>
          <Tag color="green" key={`item-${index}`}>
            {item[Object.keys(item)]}
          </Tag>
        </div>
      ))}
    </>
  )
}

export default UtilityItem;
