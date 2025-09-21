import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching:", MENU_API + resId);

        const response = await fetch(MENU_API + resId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("❌ Fetch failed:", error);
        setResInfo(null); // prevent crash
      }
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return resInfo;
};   // ✅ correct closing

export default useRestaurantMenu;
