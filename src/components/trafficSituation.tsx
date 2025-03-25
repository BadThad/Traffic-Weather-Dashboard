import "./trafficSituationStyles.css"
import { useEffect } from "react";
import { useSituationsStore } from "../stores/situationsStore";
import { useSearchStore } from "../stores/searchStore";
import fetchTrafikverketAPI from "../services/trafficSituationApi";

const TrafficSituation: React.FC = () => {

  const coordinates = useSearchStore((state) => state.coordinates);
  const where = useSituationsStore((state) => state.where);
  const what = useSituationsStore((state) => state.what);
  const why = useSituationsStore((state) => state.why);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!coordinates) return;

        const getSituation = async () => {
            setLoading(true);
            setError(null);

            try {
                const situation = await fetchTrafikverketAPI(coordinates.lat, coordinates.lng);
                set where(where)
            }
        }
    }, [coordinates, ])
  
  const { fetchSituationAsync } = useSituationsStore();

  return (
    <div className="componentContainer">
      <p>{where}</p> {/*VAR ÄR SITUATIONEN*/}
      <p>{what}</p> {/*VAD FÖR SITUATION*/}
      <p>{why}</p> {/*BESKRIVNING AV SITUATIONEN*/}
      <button
        onClick={() => fetchSituationAsync(coordinates.lat, coordinates.lng)}
      >
        KLICK FOR SITUATION
      </button>
    </div>
  );
};

export default TrafficSituation;
