import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_URL } from './utils/constants'

const RestaurantMenu = () => {
    const [resInfo, setResinfo] = useState(null)
    const {resId} = useParams()
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const response = await data.json();
        setResinfo(response.data)
    }

    useEffect(() => {
        fetchMenu();
    }, [])

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;


    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;