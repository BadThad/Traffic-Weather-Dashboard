import "./trafficSituationStyles.css"
import { useSituationsStore } from "../stores/situationsStore";


function TrafficSituation() {

const { fetchSituationAsync } =
useSituationsStore();
    

const where = useSituationsStore((state) => state.where);
const what = useSituationsStore((state) => state.what);
const why = useSituationsStore((state) => state.why);

    return (
        <div className="componentContainer">
            <p>{where}</p>  {/*VAR ÄR SITUATIONEN*/}
            <p>{what}</p>   {/*VAD FÖR SITUATION*/}
            <p>{why}</p>    {/*BESKRIVNING AV SITUATIONEN*/}   
            <button onClick={() => fetchSituationAsync(12, 56)}>
              KLICK FOR SITUATION
            </button>       
        </div>
    );

};

export default TrafficSituation;
