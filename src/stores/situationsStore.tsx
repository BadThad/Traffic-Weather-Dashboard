import { create } from "zustand";

//define the type of thestore
type SituationsStore = {
  where: string;
  what: string;
  why: string;
  fetchSituationAsync: (lon: number, lat: number) => Promise<void>;
};

//create the store
export const useSituationsStore = create<SituationsStore>((set) => ({
  where: "here",
  what: "olycka",
  why: "nothing",

  fetchSituationAsync: async (lon, lat) => {
    const url = `https://api.trafikinfo.trafikverket.se/v2/data.json`;
    const myKey = "b7b7d7583c7d4d79b51214eceb67a1ad";

    const xmlData = `<REQUEST>
            <LOGIN authenticationkey="${myKey}" />
            <QUERY objecttype="Situation" schemaversion="1" limit="1">
            <FILTER>
                <NEAR name="Deviation.Geometry.WGS84" value="${lon} ${lat}" mindistance="0m" maxdistance="90000m" />
            </FILTER>
            </QUERY>
        </REQUEST>`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: xmlData,
        headers: {
          "Content-Type": "text/xml",
        },
      });
      if (!response.ok) {
        throw new Error("Network respons was not OK!");
      }
      const data = await response.json();
      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  },
}));
