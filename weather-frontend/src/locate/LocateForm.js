import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./LocateForm.css"
/** Locate form
 *
 * Shows form and manages to update state on changes.
 * On submission:
 * - calls locate function prop (from App)
 *
 * Routes -> LocateForm -> Weather
 * Routes as /where-thee
 */

function LocateForm({locate}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    country: ""
  })

  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit
   *
   * Calls locate function prop, and if not sucessful, sets errors.
   *
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await locate(formData.city, formData.state, formData.country);
      navigate("/weather")
    }
    catch (err) {
      setFormErrors(err);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({...data, [name]: value}))
  }

return (
  <div>
    <div className="Locate-form">
      <h2>WYA?</h2>
      <div className="form-body">
        <form onSubmit={handleSubmit}>
        <div className="label-input">
          <label>City</label>
          <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="San Francisco"
          />
        </div>

        <div className="label-input">
          <label>State</label>
          <input
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="CA"
          />
        </div>

        <div className="label-input">
          <label>Country</label>
          <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="US"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>
              Submit
          </button>
        </div>

        </form>
      </div>
    </div>
  </div>
)

}

export default LocateForm;