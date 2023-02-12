import { Link } from "react-router-dom";

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
  return (
    <div>
      <div>
        <h1>Whether</h1>
        <p>Stay cozy, leave the guesswork behind with the jacket decision-maker.</p>
        <p>In weather, confusion reigns
          <br />
          But with Whether, peace remains
          <br />
          No more shivering pains!</p>

      </div>
    </div>
  );
}

export default Homepage;