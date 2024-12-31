import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = (props) => {
  return (
    <ul className={classes.posts}>
      <Post author="Gerges" body="Welcome to Reactjs Posts" />
      <Post author="Georges" body="Check out my posts" />
    </ul>
  );
};

export default PostsList;
