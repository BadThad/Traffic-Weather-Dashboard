import "./index.css";
import SearchBar from "./components/searchbar";
import TrafficSituation from "./components/trafficSituation";
import WeatherSearchBox from "./components/weatherComponent";

function App() {
  return (
    <div>
      <p>Hello Traffic-Weather-Dashboard</p>
      <h2 className="text-3xl font-bold text-blue-500">Hello, Tailwind!</h2>
      <SearchBar />
      <WeatherSearchBox />
      <TrafficSituation></TrafficSituation>
    </div>
  );
}

export default App;
