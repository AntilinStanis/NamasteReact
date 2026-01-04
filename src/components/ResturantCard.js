import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  return (
    <div className="res-card m-3 h-113 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-300">
      <img
        className="res-img rounded-lg h-60"
        src={`${CDN_URL}/${props.resData.info.cloudinaryImageId}`}
      />
      <h3 className="font-bold py-2">{props.resData.info.name}</h3>
      <h5 style={{ margin: 0 }}>
        {props.resData.info.cuisines.join(", ")}
      </h5>
      <div>{props.resData.info.avgRating} stars</div>
      <div>
        Delivery Time: {props.resData.info.sla.deliveryTime} mins
      </div>
    </div>
  );
};

export const withPromotedLabel = (ResCard)=>{
  // console.log({ResturantCard});
  console.log({info : "withPromotedLabel function called"});
  return (props)=>{

       return <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <ResCard {...props}></ResCard>
       </div>
     
  };

};

export default ResturantCard;