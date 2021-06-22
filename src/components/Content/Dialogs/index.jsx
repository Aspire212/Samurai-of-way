import React from "react";
import { NavLink } from 'react-router-dom'

import "./Dialogs.css";

const Dialogs = () => (
    <div className="dialogs">
        <div className="dialogs-items">
            <div className="dialog dialog-active">
              <NavLink to='/dialogs/1'>Stason</NavLink>
              </div>
            <div className="dialog">
              <NavLink to='/dialogs/2'>Dimych</NavLink>
           </div>
            <div className="dialog">
              <NavLink to='/dialogs/3'>Artyom</NavLink>
            </div>
            <div className="dialog">
              <NavLink to='/dialogs/4'>Alesya</NavLink>
              </div>
        </div>
        <div className="messages">
            <div className="message">Hi</div>
            <div className="message">How is your it-kamsutra?</div>
            <div className="message">Yo</div>
        </div>
    </div>
);

export default Dialogs;
