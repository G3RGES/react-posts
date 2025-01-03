import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = ({ modalVisible, hideModal }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }

    getPosts();
  }, []);

  function addPostsHandler(postsData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postsData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPosts) => [postsData, ...existingPosts]);
  }

  return (
    <>
      {modalVisible === true && (
        <Modal hideModal={hideModal}>
          <NewPost
            // changeBodyHandler={changeBodyHandler}
            // changeAuthorHandler={changeAuthorHandler}
            closeModal={hideModal}
            addPost={addPostsHandler}
          />
        </Modal>
      )}

      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author={authorName} body={bodyText} /> */}
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts found</h2>
          <p>Start adding some posts </p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
