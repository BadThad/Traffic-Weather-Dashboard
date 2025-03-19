const myKey = "b7b7d7583c7d4d79b51214eceb67a1ad";
const url = `https://api.trafikinfo.trafikverket.se/v2/data.json`;

const lon = "16.52"
const lat = "58.96"

const time = new Date();
console.log(time);


const xmlData = 
    `<REQUEST>
        <LOGIN authenticationkey="${myKey}" />
        <QUERY objecttype="Situation" schemaversion="1" limit="2">
        <FILTER>
            <NEAR name="Deviation.Geometry.WGS84" value="${lon} ${lat}" mindistance="0m" maxdistance="1000m" />
        </FILTER>
        </QUERY>
    </REQUEST>`;

async function fetchTrafikverketAPI() {
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
        console.log("data :" + JSON.stringify(data

        ));
    }   catch(error){
        console.log(error);
    }
};

fetchTrafikverketAPI();