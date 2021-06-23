import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

const dialogsData = [
    { name: "Stason", id: 1 },
    { name: "Dimych", id: 2 },
    { name: "Artyom", id: 3 },
    { name: "Alesya", id: 4 },
    { name: "Ludaria", id: 5 },
    { name: "Sasha", id: 6 },
    { name: "Varya", id: 7 },
];

const messagesData = [
    { text: "Hi", id: 1 },
    { text: "How is your it-kamsutra?", id: 2 },
    { text: "Yo", id: 3 },
    { text: "Yo-yo", id: 4 },
];

const postData = [
    {
        id: 1,
        message: "It's my first post!",
        likesCount: 11,
    },
    {
        id: 2,
        message: "Hi, how are you?",
        likesCount: 12,
    },
];

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App
                dialogsData={dialogsData}
                messagesData={messagesData}
                postData={postData}
            />
        </Router>
    </React.StrictMode>,
    document.getElementById("root"),
);
