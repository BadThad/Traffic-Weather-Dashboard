import "./App.css";
import SearchBar from "./components/searchbar";
import TrafficSituation from "./components/trafficSituation";
import WeatherSearchBox from "./components/weatherComponent";

function App() {
  return (
    <div>
      <p>Hello Traffic-Weather-Dashboard</p>
      <SearchBar />
      <TrafficSituation></TrafficSituation>
      <WeatherSearchBox></WeatherSearchBox>
    </div>
  );
}

export default App;
