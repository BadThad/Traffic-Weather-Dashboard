export const fetchTrafikverketAPI = async (lng:number | null, lat:number | null) => { 
    
    const myKey = import.meta.env.VITE_TRAFIKVERKET_API_KEY;
    const url:string = `https://api.trafikinfo.trafikverket.se/v2/data.json`;

    const xmlData = 
    `<REQUEST>
        <LOGIN authenticationkey="${myKey}" />
        <QUERY objecttype="Situation" schemaversion="1" limit="1">
        <FILTER>
            <NEAR name="Deviation.Geometry.WGS84" value="${lng} ${lat}" mindistance="0m" maxdistance="90000m" />
        </FILTER>
            <INCLUDE>Deviation.Message</INCLUDE>
            <INCLUDE>Deviation.LocationDescriptor</INCLUDE>
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
        console.log(JSON.stringify(data));
        
    }   catch(error){
        console.log(error);
    }
};
