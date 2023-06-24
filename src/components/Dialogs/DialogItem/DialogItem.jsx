import React from "react";
import { NavLink } from "react-router-dom";
import "./../Dialogs.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="dialog">
      <img src="https://abrakadabra.fun/uploads/posts/2022-03/1646469544_6-abrakadabra-fun-p-ava-v-odnoklassnikakh-bez-fona-15.png" />
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};


export default DialogItem;
