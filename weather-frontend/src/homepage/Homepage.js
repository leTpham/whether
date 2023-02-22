import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
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
          <button onClick = {() => navigate("/where-thee")}>let's go</button>
    </div>
  );
}

export default Homepage;