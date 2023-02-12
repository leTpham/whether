import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class WhetherApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params})).data;
     } catch (err) {
      console.error("API Error:", err.response);
      //TODO: throw error here based on error message
     }
  }

  static async locateApi(city, state, country) {
    let res = await this.request(`weather?city=${city}&state=${state}&country=${country}&limit=3`)
    return res.result;
  }
}

export default WhetherApi;