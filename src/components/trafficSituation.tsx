import "./trafficSituationStyles.css"
import { useSituationsStore } from "../stores/situationsStore";


function TrafficSituation() {

    /*
const [adress, setAdress] = useState("Paradisäpplevägen 111");
const [situation, setSituation] = useState("väg avstängd");
const [message, setMessage] = useState("The road. It's..... gone!");
*/

const where = useSituationsStore((state) => state.where);
const what = useSituationsStore((state) => state.what);
const why = useSituationsStore((state) => state.why);

    return (
        <div className="componentContainer">
            <p>{where}</p>  {/*VAR ÄR SITUATIONEN*/}
            <p>{what}</p>   {/*VAD FÖR SITUATION*/}
            <p>{why}</p>    {/*BESKRIVNING AV SITUATIONEN*/}          
        </div>
    );

};

export default TrafficSituation;
