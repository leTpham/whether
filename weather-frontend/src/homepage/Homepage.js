import { useNavigate } from "react-router-dom";
import Button from "../button/Button"
import "./Homepage.css"

/** Homepage of site.
 *
 * Shows welcome haiku.
 *
 * Routed at /welcome
 *
 * Routes -> Homepage
 *
 */

function Homepage() {
  const navigate = useNavigate()
  return (
    <div className="Homepage">
        <h1>Whether</h1>
        <div className="welcome-text">
        <p>Stay cozy, leave the guesswork behind with the jacket decision-maker.</p>
        <p>In weather, confusion reigns
          <br />
          But with Whether, peace remains
          <br />
          No more shivering pains!</p>
          </div>
          <Button action={() => navigate("/where-thee")} text= "let's go"></Button>
    </div>
  );
}

export default Homepage;