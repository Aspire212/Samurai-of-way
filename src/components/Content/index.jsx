import React from "react";
import Profile from "./Profile";
import Dialogs from "./Dialogs";
import Music from "./Music";
import { Switch, Route } from "react-router-dom";

import "./Content.css";

const Content = ({
    postData,
    messagesData,
    dialogsData,
    addPost,
    updateNewPostText,
    addMessage,
    updateMessage,
}) => {
    return (
        <div className="content">
            <Switch>
                <Route path="/Home">Home</Route>
                <Route path="/news">News</Route>
                <Route path="/profile">
                    <Profile
                        postData={postData}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText}
                    />
                </Route>
                <Route path="/dialogs">
                    <Dialogs
                        dialogsData={dialogsData}
                        messagesData={messagesData}
                        addMessage={addMessage}
                        updateMessage={updateMessage}
                    />
                </Route>
                <Route path="/music">
                    <Music />
                </Route>
                <Route path="/settings">Settings</Route>
            </Switch>
        </div>
    );
};

export default Content;
