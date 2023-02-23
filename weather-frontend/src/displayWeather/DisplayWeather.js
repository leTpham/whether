import { Navigate, useNavigate } from "react-router-dom";
import "./DisplayWeather.css"
function DisplayWeather({suggestion}) {
  const navigate = useNavigate();
  return (
    <div className="suggestion">
      {suggestion}
      <button onClick={()=> navigate("/where-thee")}
> locate me again please</button>
      </div>
  )
}

export default DisplayWeather;