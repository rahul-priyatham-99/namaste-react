import { useState,useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const [hideCategory, setHideCategory] = useState(false)

    const handleClick = () => {
        setShowIndex();
        setHideCategory(!hideCategory)
    }
    
    useEffect(()=> {
        setHideCategory(true)
    }, [])
    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && hideCategory && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;