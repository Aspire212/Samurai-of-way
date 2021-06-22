import React from "react";
import DialogItem from "./DialogsItem";
import Message from "./Message";

import "./Dialogs.css";

const Dialogs = () => {

    let dialogsData = [
        { name: "Stason", id: 1 },
        { name: "Dimych", id: 2 },
        { name: "Artyom", id: 3 },
        { name: "Alesya", id: 4 },
        { name: "Ludaria", id: 5 },
        { name: "Sasha", id: 6 },
        { name: "Varya", id: 7 },
    ];

    let messagesData = [
        { text: "Hi", id: 1 },
        { text: "How is your it-kamsutra?", id: 2 },
        { text: "Yo", id: 3 },
        { text: "Yo-yo", id: 4 },
    ];
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
