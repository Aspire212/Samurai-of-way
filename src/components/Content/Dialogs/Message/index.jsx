import React from "react";
import "./Message.css";

const Message = ({ text }) => {
    return (
        <div>
            <div className="message">{text}</div>
        </div>
    );
};

export default Message;
