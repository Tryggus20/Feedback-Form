import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Comments() {
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");
  const history = useHistory();
  const addComments = (event) => {
    event.preventDefault();

    console.log("comments: ", comments);
    dispatch({ type: "ADD_COMMENTS", payload: comments });
    history.push("/review");
  };
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };
  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <br />
      <p>Comments:</p>
      <input type="text" value={comments} onChange={handleCommentsChange} />
      <button type="button" onClick={addComments}>
        NEXT
      </button>
    </>
  );
}
