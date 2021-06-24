import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import state from './redux/state'
import { addPost } from './redux/state'

import "./index.css";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App
                state={state}
                addPost={addPost}
            />
        </Router>
    </React.StrictMode>,
    document.getElementById("root"),
);
