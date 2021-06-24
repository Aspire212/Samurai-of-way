import React from "react";
import Friends from "./Friends";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = ({ friendsData }) => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink activeClassName="link-active" to="/Home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="link-active" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="link-active" to="/news">
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="link-active" to="/dialogs">
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="link-active" to="/music">
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="link-active" to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
            <div className="sitebar-friends">
            {friendsData.map((friend) => (
                    <Friends
                        key={friend.id}
                        name={friend.name}
                        img={friend.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default Nav;
