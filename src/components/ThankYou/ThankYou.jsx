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
    <div>
      <h1>Thank you for filling out the survey!</h1>
      <br />
      <br />
      <p>Take it again?</p>
      <Button className="button" onClick={beginAgain}>Take Survey</Button>
    </div>
  );
}
