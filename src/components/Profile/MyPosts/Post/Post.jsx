import React from "react";
import "./Post.css";
import emptyLike from './icons/emptyLike.png';

const Post = (props) => {
  
  return (
    <div className="item-post">
      <img src="https://abrakadabra.fun/uploads/posts/2022-03/1646469544_6-abrakadabra-fun-p-ava-v-odnoklassnikakh-bez-fona-15.png" />
      {props.message}
      <div>
        <span className="icon"><img src={emptyLike} /> {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
