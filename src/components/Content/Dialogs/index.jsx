import React from "react";
import DialogItem from "./DialogsItem";
import Message from "./Message";

import "./Dialogs.css";

const Dialogs = ({ dialogsData }) => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsData.dialogs.map((user) => (
                    <DialogItem key={user.id} name={user.name} id={user.id} />
                ))}
            </div>
            <div className="messages">
                {dialogsData.messages.map((mes) => (
                    <Message key={mes.id} text={mes.text} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
