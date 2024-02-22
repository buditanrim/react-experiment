import { RESTO_IMG } from "../utils/constant";

const RestoCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, cloudinaryImageId, deliveryTime } = resData?.data;
    return (
        <div className="resto-item">
            <img className="resto-img"
                src={RESTO_IMG + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating}</p>
            <p>{deliveryTime} minutes</p>
        </div>
    )
}

export default RestoCard