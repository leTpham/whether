import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage"
import LocateForm from "../locate/LocateForm"

/** Site wide routes
 *
 * Parts of the site should only be visible when user is located.
 *
 *
 */

function RoutesList({locate}) {
  return (
    <div>
      <Routes>
        <Route path="/whether" element={<Homepage />}/>
        <Route path="/where-thee" element={<LocateForm locate={locate} />}/>
        {/* <Route path="/weather" element={<Homepage />}/>
        <Route path="/wear-the" element={<Homepage />}/> */}
      </Routes>
    </div>
  )
}

export default RoutesList