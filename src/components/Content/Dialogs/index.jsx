import React from "react";
import DialogItem from "./DialogsItem";
import Message from "./Message";

import "./Dialogs.css";

const Dialogs = ({ dialogsData, addMessage, updateMessage }) => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsData.dialogs.map((user) => (
                    <DialogItem key={user.id} name={user.name} id={user.id} />
                ))}
            </div>
            <div className="messages">
                {dialogsData.messages.map((mes) => (
                    <Message key={mes.id + Math.random()} text={mes.text} />
                ))}
            </div>
            <div>
                <textarea
                    value={dialogsData.newMessageText}
                    onChange={(e) =>
                        updateMessage(e.target.value)
                    }
                />
                <div>
                    <button className="add-message" onClick={addMessage}>
                        add message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
