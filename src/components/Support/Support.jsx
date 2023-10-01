import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Support() {
  const dispatch = useDispatch();
  const [support, setSupport] = useState("");
  const history = useHistory();
  const addSupport = (event) => {
    event.preventDefault();
    if (support !== "") {
      console.log("support: ", support);
      // add support to reducer and move to the understanding question
      dispatch({ type: "ADD_SUPPORT", payload: support });
      history.push("/comments");
    } else {
      alert("Please fill in the input field before continuing.");
    }
  };
  const handleSupportChange = (event) => {
    setSupport(event.target.value);
  };
  return (
    <>
      <h1>How well are you being supported?</h1>
      <br />
      <p>Support?</p>
      <input
        type="number"
        min={1}
        max={5}
        value={support}
        onChange={handleSupportChange}
      />
      <button type="button" onClick={addSupport}>
        NEXT
      </button>
    </>
  );
}
