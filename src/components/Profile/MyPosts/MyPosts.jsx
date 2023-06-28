import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
  console.log("render");
  let postsElements = props.posts.map((element) => {
    return <Post key={element} message={element.message} likesCount={element.likesCount} />;
  });

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className="posts-block">
      <div>my post</div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className="posts">{postsElements}</div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="your post text"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button className="btn-primery">Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ZProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
