import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from './utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'
import { useState } from 'react'

const RestaurantMenu = () => {
    // const [resInfo, setResinfo] = useState(null)
    const [showIndex, setShowIndex] = useState(0)
    const [showItems, setShowItems] = useState(true)

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (eachCard) => eachCard?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return (
        <div className="text-center">
            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) =>
                <RestaurantCategory
                    showItems={showIndex === index && true}
                    setShowIndex = {()=> {setShowIndex(index)}}
                    key={category?.card?.card.title}
                    data={category?.card?.card} />
            )}
        </div>
    )
}

export default RestaurantMenu;