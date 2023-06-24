import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { AddMessageFormRedux } from "./Message/AddMessageForm";

// const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((element) => {
    return <DialogItem name={element.name} id={element.id} key={element.id} />;
  });
  let messagesElements = state.messagesData.map((element) => {
    return <Message message={element.message} key={element.id} />;
  });

  let addNewMessage = (values) => {
    props.sendMessageActionCreator(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Navigate to="/login"></Navigate>;
  }

  return (
    <div className="dialogs">
      <div className="dialogs-items">{dialogsElements}</div>

      <div className="messages">
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

// const AddMessageForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field
//           component={Textarea}
//           validate={[required, maxLength100]}
//           name="newMessageBody"
//           placeholder="enter your message"
//         />
//       </div>
//       <div>
//         <button>send</button>
//       </div>
//     </form>
//   );
// };

// const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
//   AddMessageForm
// );

export default Dialogs;
