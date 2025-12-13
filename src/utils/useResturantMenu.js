import { useEffect,useState } from "react";
import { menu } from "./resturant";
const useResturantMenu = (resId) => {
  console.log("The resturant id is ",resId);

  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
     console.log("useeffect called");
      // Always check if the data path exists before accessing deeply nested properties
      const restaurantJson = menu?.data?.cards;
      // console.log({menu : menu?.data?.cards?.[2]?.card?.card?.info});
      console.log("hell0 ",menu?.data?.cards[4].groupedCard.cardGroupMap.REGULAR);

      if (restaurantJson) {
        setRestaurant(restaurantJson);
      } else {
        console.warn("Restaurant info not found in menu data.");
      }
  },[]);
  console.log("hello resturant",restaurant);
  return restaurant;
};

export default useResturantMenu;
