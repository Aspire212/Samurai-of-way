import React from "react";

import "./Friends.css";

const Friends = ({ name, img }) => {
    return (
        <div className="friend">
            <div className='friend-img'>
                <img src={img} alt={name + " img"} />
            </div>
            <div className='friends-name'>{name}</div>
        </div>
    );
};

export default Friends;
