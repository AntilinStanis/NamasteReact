import { useEffect, useState } from "react";
import { menu } from "../utils/resturant";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    try {
      // Always check if the data path exists before accessing deeply nested properties
      const restaurantJson = menu?.data?.cards?.[2]?.card?.card?.info;
      console.log(menu?.data?.cards);

      if (restaurantJson) {
        setRestaurant(restaurantJson);
      } else {
        console.warn("Restaurant info not found in menu data.");
      }
    } catch (error) {
      console.error("Error fetching menu:", error.message);
    }
  }

  const { name, cuisines = [],avgRating } = restaurant;

  return (
    <div className="menu-parent">
      <h1>{name || "Loading..."}</h1>
          <div >
      <div className="menu">
    
        <div className="menu-content">
          <p>ratings:{avgRating} </p>
          {cuisines.length > 0 && <h3>{cuisines.join(", ")}</h3>}
          <ul>
            <li>Biryani</li>
            <li>Biryani</li>
            {/* <li>Biryani</li>
            <li>Biryani</li> */}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
