import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from './utils/useRestaurantMenu'

const RestaurantMenu = () => {
    // const [resInfo, setResinfo] = useState(null)
    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId);

    // Using the custom hook (useRestaurantMenu) to fetch the restaurant menu
    
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId)
    //     const response = await data.json();
    //     setResinfo(response.data)
    // }

    // useEffect(() => {
    //     fetchMenu();
    // }, [])

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
                {itemCards?.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;