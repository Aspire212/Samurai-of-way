import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import Content from "../Content";
import "./App.css";

const App = ({ state, addPost }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="app-body">
                <Nav  friendsData={state.sitebar.friends}/>
                <Content
                    dialogsData={state.dialogsPage}
                    postData={state.profilePage.posts}
                    addPost={addPost}
                />
            </div>
        </div>
    );
};

export default App;
