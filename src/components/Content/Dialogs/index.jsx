import React from "react";
import DialogItem from "./DialogsItem";
import Message from "./Message";

import "./Dialogs.css";



const Dialogs = () => (
    <div className="dialogs">
        <div className="dialogs-items">
           <DialogItem name='Stason' id='1' />
           <DialogItem name='Dimuch' id='2' />
           <DialogItem name='Artyom' id='3' />
           <DialogItem name='Alesya' id='4' />
           <DialogItem name='Luda' id='5' />
           <DialogItem name='Sasha' id='6' />
        </div>
        <div className="messages">
            <Message text='Hi'/>
            <Message text='How is your it-kamsutra?'/>
            <Message text='Yo'/>
        </div>
    </div>
);

export default Dialogs;
