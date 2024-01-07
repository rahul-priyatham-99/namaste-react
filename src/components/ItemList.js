import { CDN_URL } from "./utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) =>
                <div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between" key={item?.card?.info?.id}>
                    <div className="w-9/12 pr-4">
                        <div>
                            <span>{item?.card?.info?.name}</span>
                            <span> Rs.{item?.card?.info?.price / 100 ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                        </div>
                        <p className="text-[12px]">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-4/12">
                        <div className="absolute">
                            <button className="p-2 bg-gray-200 shadow-lg rounded-md">Add +</button>
                        </div>
                        <img
                            src={CDN_URL + item?.card?.info?.imageId}
                            className="w-50 h-50 rounded-lg">
                        </img> 
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemList;