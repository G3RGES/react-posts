import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = () => {
  const [bodyText, setBodyText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function changeBodyHandler(event) {
    // console.log(event.target.value); //* TESTING
    setBodyText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthorName(event.target.value);
  }

  function showModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible === true && (
        <Modal showModal={showModal}>
          <NewPost
            setBodyText={setBodyText}
            changeBodyHandler={changeBodyHandler}
            changeAuthorHandler={changeAuthorHandler}
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
