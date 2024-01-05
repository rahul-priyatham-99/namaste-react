import { CDN_URL } from "./utils/constants"

const RestaurantCard = (props) => {
    console.log(props)
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo" className="res-logo">
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;