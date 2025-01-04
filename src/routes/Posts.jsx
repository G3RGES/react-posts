import { useState } from "react";
// import MainHeader from "./components/MainHeader";
// import Post from "./components/Post";
// import PostsList from "./components/PostsList";
// import MainHeader from "../components/MainHeader";
import Post from "../components/Post";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModal() {
  //   setModalIsVisible(true);
  // }

  // function hideModal() {
  //   setModalIsVisible(false);
  // }

  return (
    <>
      {/* <MainHeader onCreatePost={showModal} /> */}
      <Outlet />
      <main>
        <PostsList
        //  modalVisible={modalIsVisible} hideModal={hideModal}
        />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();

  return data.posts;
}
