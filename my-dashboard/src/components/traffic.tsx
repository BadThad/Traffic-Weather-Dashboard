import React, { useEffect, useState } from "react";
import axios from "axios";

const TrafficIncidents = () => {
  const [incidents, setIncidents] = useState<any[]>([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const API_KEY = "5809fce6312e450a8858992e658e15a6"; 

        const xmlRequest = `
        <REQUEST>
          <LOGIN authenticationkey="${API_KEY}" />
          <QUERY objecttype="Situation" schemaversion="1.0">
            <FILTER>
              <EQ name="Deviation.MessageType" value="Incident" />
              
            </FILTER>
            <INCLUDE>Deviation.Id</INCLUDE>
            <INCLUDE>Deviation.Message</INCLUDE>
            <INCLUDE>Deviation.LocationDescriptor</INCLUDE>
            <INCLUDE>Deviation.Geometry.WGS84</INCLUDE>
          </QUERY>
        </REQUEST>
      `;      

        const response = await axios.post(
          "https://api.trafikinfo.trafikverket.se/v2/data.json",
          xmlRequest,
          {
            headers: {
              "Content-Type": "application/xml",
            },
          }
        );

        console.log("Full response:", response.data);

        const results = response.data?.RESPONSE?.RESULT?.[0]?.Situation || [];
        if (results.length === 0) {
          setIncidents([
            {
              Deviation: [
                {
                  Message: "🚧 Mock incident: Road closure on E4",
                  LocationDescriptor: "E4 near Stockholm",
                },
              ],
            },
          ]);
        } else {
          setIncidents(results);
        }
        
      } catch (error) {
        console.error("Error fetching traffic incidents:", error);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div>
      <h3>Traffic Incidents</h3>
      <ul>
        {incidents.slice(0, 3).map((incident, index) => (
          <li key={index}>
            {incident?.Deviation?.[0]?.Message} 🚨
          </li>
        ))}
        {incidents.length === 0 && <li>No current incidents found.</li>}
      </ul>
    </div>
  );
};

export default TrafficIncidents;
