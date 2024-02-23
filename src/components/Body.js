import RestoCard from "./RestaurantCard";
import resList from "../utils/restaurantData";
import { useState, useEffect } from "react"

const Body = () => {
  // State for search box value
  const [searchText, setSearchText] = useState('');
  console.log(searchText)

  // The list of restaurant from resList using useState React function
  let [listOfRestaurants, setListOfRestaurants] = useState(resList)
  let [filteredRestaurant, setFilteredRestaurant] = useState(resList)


  // Note: This doesn't work because we can't pull API
  if (listOfRestaurants.length === 0) {
    return <h1>hello loading</h1>
  }

  return (
    <div className="body">

      <div className="filter">

        <div>
          <input type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />

          <button onClick={() => {
            // Search the name that's match
            console.log(searchText)
            const searchedRestaurant = listOfRestaurants.filter((restaurant) => {
              return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredRestaurant(searchedRestaurant)
          }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // Filter the restaurant list and return the match
            const filteredList = listOfRestaurants.filter((res) => {
              return res.data.deliveryTime < 40
            })

            setListOfRestaurants(filteredList)
          }}>
          Filter
        </button>
      </div>

      <div className="resto-container">
        {// Map throught Restaurant List and render the card
          filteredRestaurant.map((restaurant) => {
            return <RestoCard key={restaurant.data.id} resData={restaurant} />
          })}
      </div>
    </div>
  )
}

export default Body;

// json.data.cards