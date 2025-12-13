import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantSection from "./ResuturantSection";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const restaurant = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const {
    name,
    cuisines = [],
    avgRating,
  } = restaurant?.[2]?.card?.card?.info ?? {};

  const sections =
    restaurant?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (section) => {
        return (
          section?.card?.card?.type ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    ) ?? [];

  return (
    <div className="menu-parent text-center mt-10">
      <h1 className="font-bold mb-5 text-2xl">{name || "Loading..."}</h1>
      <div>
        <p>ratings:{avgRating}</p>
        <p className="font-bold text-lg">
          {" "}
          {cuisines.length > 0 && cuisines.join(", ")}
        </p>
        {sections.map((section, index) => (
          <ResturantSection
            key={section?.card?.card?.title}
            data={section?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => {
              console.log("my index ", index, "before index ", showIndex);
              if (index === showIndex) {
                setShowIndex(null);
              } else {
                setShowIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
