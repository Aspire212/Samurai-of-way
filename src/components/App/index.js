import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import Content from "../Content";
import "./App.css";

const App = ({ state }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="app-body">
                <Nav />
                <Content
                    dialogsData={state.dialogsPage}  
                    postData={state.profilePage.posts}
                />
            </div>
        </div>
    );
};

export default App;
