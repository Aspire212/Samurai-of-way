import React from "react";
import DialogItem from "./DialogsItem";
import Message from "./Message";

import "./Dialogs.css";

const Dialogs = ({ dialogsData, messagesData }) => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsData.map((user) => (
                    <DialogItem key={user.id} name={user.name} id={user.id} />
                ))}
            </div>
            <div className="messages">
                {messagesData.map((mes) => (
                    <Message key={mes.id} text={mes.text} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
