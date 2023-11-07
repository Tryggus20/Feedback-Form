import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from 'react-bootstrap';


export default function ThankYou() {
  const history = useHistory();
  //takes you back to the beginning of the survey
  const beginAgain = (event) => {
    event.preventDefault();
    history.push("/");
  };
  return (
    <div className="ThankYou-container">
      <h1 className="ThankYou-heading">Thank you for filling out the survey!</h1>
      <br />
      <br />
      <p className="ThankYou-text">Take it again?</p>
      <Button className="ThankYou-button" onClick={beginAgain}>Take Survey</Button>
    </div>
  );
}
