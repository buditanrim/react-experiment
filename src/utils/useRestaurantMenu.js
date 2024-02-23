// Responsibility: Fetch the data
import { useEffect, useState } from "react";

const useRestaurantMenu = () => {

  const [resMenu, setRestMenu] = useState(null)

  // fetch the data
  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=52630&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    setRestMenu(json.data)
    console.log(`Fetch: ${json.data}`)
    console.log(json.data)
  }
  return resMenu;
}

export default useRestaurantMenu