import RestaurantCard from "./RestaurantCard"
import resList from "./utils/mockedData"
import { useState } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => { 
                    filteredData = listOfRestaurants.filter((restaurant)=> restaurant.data.avgRating > 4)
                    setListOfRestaurants(filteredData)
                    console.log("listOfRestaurants:", listOfRestaurants)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => {
                    return (<RestaurantCard key={restaurant.data.id} resData={restaurant} />)
                })}
            </div>
        </div>
    )
}

export default Body