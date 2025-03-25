import "./trafficSituationStyles.css"
import { useSituationsStore } from "../stores/situationsStore";
import { useSearchStore } from "../stores/searchStore";
import { fetchTrafikverketAPI } from "../services/trafficSituationApi"
import { useEffect } from "react";

const TrafficSituation: React.FC = () => {

    const coordinates = useSearchStore((state) => state.coordinates);
    const where = useSituationsStore((state) => state.where);
    const what = useSituationsStore((state) => state.what);
    const why = useSituationsStore((state) => state.why);

  return (
    <div className="componentContainer">
      <p>{where}</p> {/*VAR ÄR SITUATIONEN*/}
      <p>{what}</p> {/*VAD FÖR SITUATION*/}
      <p>{why}</p> {/*BESKRIVNING AV SITUATIONEN*/}
      <button
        onClick={() => fetchTrafikverketAPI(coordinates.lng, coordinates.lat)}>
        KLICK FOR SITUATION
      </button>
    </div>
  );
};

export default TrafficSituation;
