import "./App.css";
import SearchBar from "./components/searchbar";
import TrafficSituation from "./components/trafficSituation";
import WeatherComponent from "./stores/weatherStore";

function App() {
  return (
    <div>
      <p>Hello Traffic-Weather-Dashboard</p>
      <SearchBar />
      <TrafficSituation></TrafficSituation>
      <WeatherComponent></WeatherComponent>
    </div>
  );
}

export default App;
