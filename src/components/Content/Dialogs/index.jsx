import React from "react";
import DialogItem from "./DialogsItem";
import Message from "./Message";

import "./Dialogs.css";

const Dialogs = ({ dialogsData }) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

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
            <div>
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button
                        className="add-message"
                        onClick={ addMessage }>add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
