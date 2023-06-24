import React from "react";
import "./../Dialogs.css";

const Message = (props) => {

  return (
    <div className="message-container">
      <div className="message">{props.message}</div>
    </div>
  );
};

export default Message;
