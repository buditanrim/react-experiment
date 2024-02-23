// Responsibility: Return the restaurant menu to the UI
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const resMenu = useRestaurantMenu()

  if (!resMenu) return <h1>loading...</h1>

  const { name, cuisines } = resMenu?.cards[2]?.card?.card?.info; // restaurant detail
  const { itemCards } = resMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card // menu list

  return (
    <div className="restaurant-menu">

      <h1>{name}</h1>
      <p>{cuisines.join(', ')}</p>
      <div>
        <p>{itemCards[1].card.info.name}</p>
        <p>{itemCards[2].card.info.name}</p>
      </div>
      <ul>
        {
          itemCards.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>
          })
        }
      </ul>
      <h3>Menu</h3>
      <ul>
        <li>Burger</li>
        <li>Diet Coke</li>
        <li>French Fries</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu