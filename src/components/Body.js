import RestaurantCard from "./RestaurantCard"
import resList from "./utils/mockedData"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState('')

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
        const response = await data.json()
        setListOfRestaurants(response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData();
    }, [])
    // conditional rendering
    // if (listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        const searchedData = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(searchedData)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    filteredData = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.3)
                    setListOfRestaurants(filteredData)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => {
                    return (<Link className="res-link" to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>)
                })}
            </div>
        </div>
    )
}

export default Body