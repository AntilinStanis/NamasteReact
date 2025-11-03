import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`${CDN_URL}/${props.resData.info.cloudinaryImageId}`}
      />
      <h3>{props.resData.info.name}</h3>
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

export default ResturantCard;