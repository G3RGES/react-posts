import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function showModal() {
    setModalIsVisible(true);
  }

  function hideModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModal} />
      <main>
        <PostsList modalVisible={modalIsVisible} hideModal={hideModal} />
      </main>
    </>
  );
}

export default App;
