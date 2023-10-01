import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Support() {
  const dispatch = useDispatch();
  const [support, setSupport] = useState("");
  const history = useHistory();
  const addSupport = (event) => {
    event.preventDefault();

    console.log("support: ", support);
    // adding support to the reducer and moving to comment page
    dispatch({ type: "ADD_SUPPORT", payload: support });
    history.push("/comments");
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
