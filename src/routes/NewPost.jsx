// import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost({ closeModal, addPost }) {
  // const [bodyText, setBodyText] = useState("");
  // const [authorName, setAuthorName] = useState("");

  // function changeBodyHandler(event) {
  //   // console.log(event.target.value); //* TESTING
  //   setBodyText(event.target.value);
  // }

  // function changeAuthorHandler(event) {
  //   setAuthorName(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault();

  //   const postData = {
  //     body: bodyText,
  //     author: authorName,
  //   };

  //   // console.log(postData); //* TESTING
  // }

  return (
    <Modal>
      <Form
        className={classes.form}
        method="post"
        // onSubmit={submitHandler}
      >
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            name="body"
            // onChange={changeBodyHandler}
          />
        </p>
        {/* <p>{bodyText}</p> */}
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            name="author"
            // onChange={changeAuthorHandler}
          />
        </p>

        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("..");
}
