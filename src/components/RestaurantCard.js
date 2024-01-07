import { useContext } from "react"
import { CDN_URL } from "./utils/constants"
import UserContext from "./utils/UserContext"

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="res-card m-4 p-4 w-[250px] h-[500px] rounded-lg bg-slate-200 hover:bg-blue-200">
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo" className="my-2 rounded-lg">
            </img>
            <h3 className="font-bold text-md">{name}</h3>
            <h4 className=" text-md mt-4">{cuisines.join(", ")}</h4>
            <h4 className=" text-md mt-2">⭐️{avgRating} • {sla.deliveryTime} mins</h4>
            <h4 className=" text-md mt-2">{costForTwo}</h4>
            <h4 className=" text-md mt-2">{sla.deliveryTime} minutes</h4>
            <h4 className=" text-md mt-2">{loggedInUser}</h4>
        </div>
    )
}

// Higher Order component

// input - RestaurantCard  ===> RestaurantCardLabeled
export const withOpenLabel = (RestaurantCard) => {
    return ((props) => {
        return (
            <div>
                <label className="absolute bg-green-400 text-black m-2 p-2 mt-0 ml-4 rounded-lg">Opened</label>
                <RestaurantCard {...props}/>
            </div>
        )
    })
}

export default RestaurantCard;