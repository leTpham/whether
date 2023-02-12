import './App.css';
import { useState } from 'react';
import RoutesList from './routes-nav/RoutesList';
import WhetherApi from './api/api';

function App() {
  const [location, setLocation] = useState({ city: "", state: "", country: "" });
  const [suggestion, setSuggestion] = useState("")
  async function locate(city, state, country) {
    let response = await WhetherApi.locateApi(city, state, country);
    setLocation({ city, state, country });
    setSuggestion(response)
    console.log("response frpm locateAPI", response);
  }

  return (
    <div className="App">
      <RoutesList locate={locate} suggestion={suggestion} />
    </div>
  );
}

export default App;
