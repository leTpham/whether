import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import "./DisplayWeather.css"
function DisplayWeather({suggestion}) {
  const navigate = useNavigate();
  return (
    <div className="suggestion">
      {suggestion}
      <Button action={()=> navigate("/where-thee")} text="Again please"></Button>
      </div>
  )
}

export default DisplayWeather;