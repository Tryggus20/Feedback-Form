import { useHistory } from "react-router-dom";
import { Dispatch } from "react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState("");
  const history = useHistory();
  const addFeeling = (event) => {
    event.preventDefault();
    const feelingToAdd = {
      feeling,
    };
    dispatch({ type: "ADD_FEELING", payload: feelingToAdd });
    history.push("/understanding");
  };
  const handleFeelingChange = (event) => {
    setFeeling(event.target.value);
  };
  return (
    <>
      <h1>How are you feeling today?</h1>
      <br />
      <p>Feeling?</p>
      <input
        type="number"
        min={1}
        max={5}
        value={feeling}
        onChange={handleFeelingChange}
      />
      <button type="button" onClick={addFeeling}>
        NEXT
      </button>
    </>
  );
}
