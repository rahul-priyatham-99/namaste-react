import {useEffect, useState} from 'react'
import { MENU_URL_2 } from './constants'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResinfo]  = useState(null)

    const fetchData = async () => {
        let data = await fetch(MENU_URL_2 + resId)
        let response = await data.json();
        console.log(response.data)
        setResinfo(response.data);
    };

    useEffect(()=> {
        fetchData();
    }, [])

    return resInfo;
}

export default useRestaurantMenu;