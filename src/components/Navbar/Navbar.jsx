import React from "react";
import "./Navbar.css";

import user from "./icons/user.png";
import mail from "./icons/mail.png";
import info from "./icons/info.png";
import settings from "./icons/settings.png";
import music from "./icons/music.png";
import friends from "./icons/friends.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item-nav">
        <NavLink to="/profile">
          <img src={user} />
          Profile
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink to="/dialogs">
          <img src={mail} />
          Messages
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink to="/users">
          <img src={friends} />
          Friends
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink to="/information">
          <img src={info} />
          Information
        </NavLink>
      </div>
      <div className="item-nav">
        <NavLink to="/music">
          <img src={music} />
          Music
        </NavLink>
      </div>
      <div className="item-nav settings">
        <NavLink to="settings">
          <img src={settings} />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
