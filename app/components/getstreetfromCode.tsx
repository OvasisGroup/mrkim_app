export const getStreetFromCoords = async (lat: number, lon: number) => {
    const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${API_KEY}`
      );
      const data = await res.json();
      
      return data.results[0]?.formatted_address || "Street not found";
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Error fetching address";
    }
  };
  