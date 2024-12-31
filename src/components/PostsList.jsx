import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

const PostsList = () => {
  const [bodyText, setBodyText] = useState("");

  return (
    <>
      <NewPost setBodyText={setBodyText} />
      <ul className={classes.posts}>
        <Post author="Gerges" body={bodyText} />
        <Post author="Gerges" body="Welcome to Reactjs Posts" />
        <Post author="Georges" body="Check out my posts" />
      </ul>
    </>
  );
};

export default PostsList;
