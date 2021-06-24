import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import {
    addPost,
    updateNewPostText,
    addMessage,
    updateMessage,
    subscribe,
} from "./redux/state";

import state from "./redux/state";
import "./index.css";

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMessage={addMessage}
                    updateMessage={updateMessage}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById("root"),
    );
};

rerenderEntireThree(state);

subscribe(rerenderEntireThree);
