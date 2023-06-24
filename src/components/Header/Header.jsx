import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import { logout } from "../../redux/auth-reducer";

const Header = (props) => {
  // debugger;
  return (
    
    <header className="header">
      <img src="https://m.media-amazon.com/images/I/51DX5RyZyiL.jpg" />
      <div className="login-block">
        {props.isAuth 
        ? 
        <div> 
          <NavLink to={"/login"}>{props.login}</NavLink>
        <button onClick={props.logout}>logout</button>
         </div>
         : <NavLink to={"/login"}>login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
