import "./trafficSituationStyles.css"
import { useEffect, useState } from "react";
import { useSituationsStore } from "../stores/situationsStore";
import { useSearchStore } from "../stores/searchStore";
import fetchTrafikverketAPI from "../services/trafficSituationApi";

const TrafficSituation: React.FC = () => {
  const coordinates = useSearchStore((state) => state.coordinates);
  const setSituations = useSituationsStore((state => state.situations))
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coordinates) return;

    const getSituation = async () => {
      setLoading(true);
      setError(null);

      try {
        const situations = await fetchTrafikverketAPI(
          coordinates.lat,
          coordinates.lng
        );
        situations(situations);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getSituation();
  }, [coordinates, setSituations]);

  const situations = useSituationsStore((state) => state.situations);

  return (
    <div className="componentContainer">
      <h2>Traffic Situations:</h2>
      {loading && <p>Loading information on traffic situation</p>}
      {error && <p>{error}</p>}
      {situations.length === 0 && !loading && (
        <p>No traffic situations found.</p>
      )}
      <ul>
        {situations.map((situation) => (
          <li key={situation.id} className="#">
            <strong>{situation.type}</strong> {situation.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficSituation;
