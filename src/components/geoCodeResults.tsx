import { useEffect } from "react";
import { useSearchStore } from "../stores/searchStore";
import { fetchCoordinates } from "../services/geoLocationApi";

const GeoCodeResult = () => {
  const searchQuery = useSearchStore((state) => state.searchQuery);
  const setCoordinates = useSearchStore((state) => state.setCoordinates);

  useEffect(() => {
    if (!searchQuery) return;

    const getCoordinates = async () => {
      try {
        const { lat, lng } = await fetchCoordinates(searchQuery);
        setCoordinates(lat, lng);
      } catch (err: any) {
        console.log(err.message);
      }
    };

    getCoordinates();
  }, [searchQuery, setCoordinates]);
};

export default GeoCodeResult;
