import { Tag } from 'antd';
import React from 'react';


const UtilityItem = (props) => {
  const { value } = props;
  const UTILITY_COLORS = {
    "wifi": "green",
    "bed": "gold",
    "roomSize": "cyan",
    "view": "blue",
    "smoking": "red",
    "shower": "purple",
  };

  return (
    <>
      {value.map((item, index)=> (
        <div style={{ marginTop: ".7rem" }} key={`item-${index}`}>
          <Tag 
            color={UTILITY_COLORS[Object.keys(item)]}
          >
            {item[Object.keys(item)]}
          </Tag>
        </div>
      ))}
    </>
  )
}

export default UtilityItem;
