import './App.css';
import { useState } from 'react';
import RoutesList from './routes-nav/RoutesList';
import WhetherApi from './api/api';

function App() {
  const [location, setLocation] = useState({ city: "", state: "", country: "" });
  
  async function locate(city, state, country) {
    let response = await WhetherApi.locateApi(city, state, country);
    setLocation({ city, state, country });
    console.log("response frpm locateAPI", response);
  }

  return (
    <div className="App">
      <RoutesList locate={locate} />
    </div>
  );
}

export default App;
