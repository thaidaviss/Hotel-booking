import React from 'react';
import "./Avatar.scss"
function Avatar(props) {
    const {urlImg} = props
    return (
        <div className="avatar">
            <img src={urlImg} alt="" />
        </div>
    );
}

export default Avatar;