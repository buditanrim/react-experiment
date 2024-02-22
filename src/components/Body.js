import RestoCard from "./RestaurantCard";
import resList from "../utils/restaurantData";

const Body = () => {
  return (
    <div className="body">
      <div className="resto-container">
        {resList.map((restaurant) => {
          return <RestoCard key={restaurant.data.id} resData={restaurant} />
        })}

      </div>
    </div>
  )
}

export default Body;