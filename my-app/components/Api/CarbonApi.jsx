import { useEffect } from "react";

function CarbonApi({ setCarbonIntensity }) {
  const headers = {
    'Accept': 'application/json'
  };

  useEffect(() => {
    fetch('https://api.carbonintensity.org.uk/intensity', {
      method: 'GET',
      headers: headers
    })
      .then((res) => res.json())
      .then((body) => {
        const intensity = body.data?.[0]?.intensity?.index;
        setCarbonIntensity(intensity);
      })
      .catch((error) => console.error("Error fetching carbon intensity:", error));
  }, []);

  return null;
}

export default CarbonApi;