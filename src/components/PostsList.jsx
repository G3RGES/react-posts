import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = ({ modalVisible, hideModal }) => {
  const [bodyText, setBodyText] = useState("");
  const [authorName, setAuthorName] = useState("");

  function changeBodyHandler(event) {
    // console.log(event.target.value); //* TESTING
    setBodyText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthorName(event.target.value);
  }

  return (
    <>
      {modalVisible === true && (
        <Modal hideModal={hideModal}>
          <NewPost
            setBodyText={setBodyText}
            changeBodyHandler={changeBodyHandler}
            changeAuthorHandler={changeAuthorHandler}
            closeModal={hideModal}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={authorName} body={bodyText} />
        <Post author="Gerges" body="Welcome to Reactjs Posts" />
        <Post author="Georges" body="Check out my posts" />
      </ul>
    </>
  );
};

export default PostsList;
