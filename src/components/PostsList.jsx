// import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";
// import NewPost from "../routes/NewPost";
// import Modal from "./Modal";

//* DON'T NEED modalVisible and hideModal BUT WILL LEAVE THEM JUST INCASE, AND FOR REFERENCE
const PostsList = ({ modalVisible, hideModal }) => {
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  const posts = useLoaderData();

  // useEffect(() => {
  //   async function getPosts() {
  //     setIsFetching(true);
  //     // const response = await fetch("http://localhost:8080/posts");
  //     // const data = await response.json();
  //     setPosts(data.posts);
  //     setIsFetching(false);
  //   }

  //   getPosts();
  // }, []);

  // function addPostsHandler(postsData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postsData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   setPosts((existingPosts) => [postsData, ...existingPosts]);
  // }

  return (
    <>
      {/* //* WILL BE HANDLED BY ROUTER  */}
      {/* {modalVisible === true && (
        <Modal hideModal={hideModal}>
          <NewPost
            // changeBodyHandler={changeBodyHandler}
            // changeAuthorHandler={changeAuthorHandler}
            closeModal={hideModal}
            addPost={addPostsHandler}
          />
        </Modal>
      )} */}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author={authorName} body={bodyText} /> */}
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts found</h2>
          <p>Start adding some posts </p>
        </div>
      )}

      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )} */}
    </>
  );
};

export default PostsList;
