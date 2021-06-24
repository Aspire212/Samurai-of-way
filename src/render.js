import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { addPost, updateNewPostText } from "./redux/state";

export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById("root"),
    );
};
