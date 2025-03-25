const myKey = import.meta.env.VITE_TRAFIKVERKET_1_API_KEY;
const url:string = `https://api.trafikinfo.trafikverket.se/v2/data.json`;

const time = new Date();
console.log(time);

async function fetchTrafikverketAPI(lng:number, lat:number) {

    const xmlData = 
    `<REQUEST>
        <LOGIN authenticationkey="${myKey}" />
        <QUERY objecttype="Situation" schemaversion="1" limit="1">
        <FILTER>
            <NEAR name="Deviation.Geometry.WGS84" value="${lng} ${lat}" mindistance="0m" maxdistance="90000m" />
        </FILTER>
        </QUERY>
    </REQUEST>`;

    try{
        const response = await fetch(url, {
            method: "POST",
            body: xmlData,
            headers: {
                "Content-Type": "text/xml",
            },
        });
        if (!response.ok) {
            throw new Error ("Network response was way no okey!");
        }
        const data = await response.json();
        console.log( "data :" + JSON.stringify(
              data.Situation.map((situation: any) => ({
                id: situation.Id,
                description: situation.Description,
                type: situation.SituationType,
              }))
            )
        );
        return data.Situation?.map((situation: any) => ({
            id: situation.Id,
            description: situation.Description,
            type: situation.SituationType,
        })) || [];
        
    }   catch(error){
        console.log(error);
    }
};

export default fetchTrafikverketAPI;