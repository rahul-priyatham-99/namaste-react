import RestaurantCard, { withOpenLabel } from "./RestaurantCard"
import resList from "./utils/mockedData"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus"
import { useContext } from "react"
import UserContext from "./utils/UserContext"


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext)

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
        const response = await data.json()
        setListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData();
    }, [])
    // conditional rendering
    // if (listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }
    if (onlineStatus === false) {
        return <h1>Look's like your not connected to internet !!!!</h1>
    }

    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex items-center justify-center">
                <div className="search m-1 p-1">
                    <input type="text" className="search-box resize-x border-solid border-black border-2 rounded-md w-64 p-1" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn px-4 py-2 m-3 border-1 bg-green-300 rounded-md font-bold"
                        onClick={() => {
                            const searchedData = filteredRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(searchedData)
                        }}>Search</button>
                </div>
                <div className="m-1 p-1">
                    <button className="filter-btn px-4 py-2 mx-20 border-1 bg-blue-300 rounded-md font-bold"
                        onClick={() => {
                            const filteredData = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.5)
                            setListOfRestaurants(filteredData)
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div>
                    <label className="font-bold">User: </label>
                    <input type="text" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} className="border-2 border-black px-2 rounded-md"/>
                </div>
            </div>
            <div className="res-container flex flex-row flex-wrap justify-start">
                {listOfRestaurants?.map((restaurant) => {
                    return (
                        <Link className="res-link" to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                            {restaurant.info.isOpen ? (<RestaurantCardOpen resData={restaurant}/>): (<RestaurantCard key={restaurant.info.id} resData={restaurant} />)}     
                        </Link>)
                })}
            </div>
        </div>
    )
}

export default Body