import { Navigate, useNavigate } from "react-router-dom";

function DisplayWeather({suggestion}) {
  const navigate = useNavigate();
  return (
    <div>
      {suggestion}
      <button onClick={()=> navigate("/where-thee")}
> locate me again please</button>
      </div>
  )
}

export default DisplayWeather;