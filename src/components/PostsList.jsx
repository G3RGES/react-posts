import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = ({ modalVisible, hideModal }) => {
  return (
    <>
      {modalVisible === true && (
        <Modal hideModal={hideModal}>
          <NewPost
            // changeBodyHandler={changeBodyHandler}
            // changeAuthorHandler={changeAuthorHandler}
            closeModal={hideModal}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        {/* <Post author={authorName} body={bodyText} /> */}
        <Post author="Gerges" body="Welcome to Reactjs Posts" />
        <Post author="Georges" body="Check out my posts" />
      </ul>
    </>
  );
};

export default PostsList;
