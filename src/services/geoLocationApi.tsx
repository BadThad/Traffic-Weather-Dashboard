const fetchLocationData = async () => {

  const api_key = "0446888e31c3f0f934343d993bca85e5";
  const api_url: string = `https://geokeo.com/geocode/v1/search.php?q=empire+state+building&api=${api_key}`;

  try {
    const response = await fetch(api_url);
    const locationData = await response.json();
    console.log(locationData.results[0].geometry.location);
  } catch (error) {
    console.log(error);
  }
};

fetchLocationData();