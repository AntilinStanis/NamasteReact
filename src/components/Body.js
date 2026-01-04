import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { GET_ALL_RESTURANTS } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resturantCards, setResturantCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();
  const ResturantPromotedCard = withPromotedLabel(ResturantCard);
  console.log({ResturantPromotedCard:ResturantPromotedCard});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_ALL_RESTURANTS);

    const jsonData = await data.json();
    let resturants =
      jsonData.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card
        .card.restaurants;
    setResturantCards(resturants);
    setFilteredCards(resturants);

  };
  if (!isOnline)
    return <h1>Your are offline , please check your internet connection</h1>;
  if (resturantCards.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type here..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              if (searchText.length) {
                const filteredResturants = resturantCards.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredCards(filteredResturants);
              } else {
                fetchData();
              }
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-4">
          <button
            className="filter-btn px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredCards = filteredCards.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setResturantCards(filteredCards);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredCards.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturant/" + resturant.info.id}>
            {/* <ResturantCard resData={resturant} /> */}
            <ResturantPromotedCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
