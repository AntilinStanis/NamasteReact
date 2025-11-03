import ResturantCard from "./ResturantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resturantCards, setResturantCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=8.702578899999999&lng=77.72789809999999&str=Pizza%20Hut&trackingId=1a1b8192-bb31-c55c-aee0-0ac579198155&submitAction=ENTER&queryUniqueId=79ae39c9-2157-2529-242f-5c1354a1e210");

    const jsonData =await data.json();
    let resturants =jsonData.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants;
     setResturantCards(resturants);
     setFilteredCards(resturants);
    console.log(jsonData.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants[0]);

  };
   if(resturantCards.length ===0){
    return <Shimmer/>
   }
  return (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              
              if(searchText.length){

                  const filteredResturants = resturantCards.filter((res) => {
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                  });
                  setFilteredCards(filteredResturants);
                  console.log(searchText);
                
              }else{ 
                 fetchData();
              }
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredCards.map((resturant) => (
         <Link key={resturant.info.id} to={"/resturant/"+resturant.info.id}><ResturantCard  resData={resturant} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;