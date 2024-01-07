import { CDN_URL } from "./utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info
    return (
        <div className="res-card m-4 p-4 w-[250px] h-[400px] rounded-lg bg-slate-200 hover:bg-blue-200">
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo" className="my-2 rounded-lg">
            </img>
            <h3 className="font-bold text-md">{name}</h3>
            <h4 className=" text-md mt-4">{cuisines.join(", ")}</h4>
            <h4 className=" text-md mt-2">⭐️{avgRating} • {sla.deliveryTime} mins</h4>
            <h4 className=" text-md mt-2">{costForTwo}</h4>
            <h4 className=" text-md mt-2">{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;