export const FetchLocationData = async () => {

  const api_key = "0446888e31c3f0f934343d993bca85e5";
  const api_url: string = `https://geokeo.com/geocode/v1/search.php?q=helsingborg&api=${api_key}`;

  try {
    const response = await fetch(api_url);
    const locationData = await response.json();

    const lng: number = locationData.results[0].geometry.location.lng
    const lat: number = locationData.results[0].geometry.location.lat
    const address: string = locationData.results[0].formatted_address

    // console.log("Longitute: " + lng);
    // console.log("Latitude: " + lat);
    // console.log("Address: " + address);

    return {lng, lat, address}; 

  } catch (error) {
    console.log("Could not fetch data from API" + "-" +  error);
  }
};