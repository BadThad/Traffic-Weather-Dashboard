import { useEffect, useState } from "react";
import "./trafficSituationStyles.css"

function TrafficSituation() {

const [adress, setAdress] = useState("Paradisäpplevägen 111");
const [situation, setSituation] = useState("väg avstängd");
const [message, setMessage] = useState("The road. It's..... gone!");



    return (
        <div className="componentContainer">
            <p>{adress}</p>             {/*VAR*/}
            <p>{situation}</p>          {/*VAD*/}
            <p>{message}</p>            {/*VARFÖR*/}          
        </div>
    );

};

export default TrafficSituation;
