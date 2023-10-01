import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ThankYou() {
  const history = useHistory();
  //takes you back to the beginning of the survey
  const beginAgain = (event) => {
    event.preventDefault();
    history.push("/");
  };
  return (
    <div>
      <h1>Thank you for filling out the survey!</h1>
      <br />
      <br />
      <p>Take it again?</p>
      <button onClick={beginAgain}>Take Survey</button>
    </div>
  );
}
