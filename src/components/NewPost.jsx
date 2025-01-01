import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({
  setBodyText,
  changeBodyHandler,
  changeAuthorHandler,
  closeModal,
}) {
  // const [bodyText, setBodyText] = useState("");

  // function changeBodyHandler(event) {
  //   // console.log(event.target.value); //* TESTING
  //   setBodyText(event.target.value);
  // }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      {/* <p>{bodyText}</p> */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>

      <p className={classes.actions}>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
