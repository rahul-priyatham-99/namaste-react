import { useContext, useState } from "react"
import { LOGO_URL } from "./utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus"
import UserContext from "./utils/UserContext"

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login')
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between shadow-sm bg-pink-50 ">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} alt="" />
            </div>
            <div className="items-center">
                <ul className="flex p-6 m-6">
                    <li className="px-4 text-md">Online status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 text-md" ><Link to='/'>Home</Link></li>
                    <li className="px-4 text-md"><Link to='/about'>About us</Link></li>
                    <li className="px-4 text-md"><Link to='/grocery'>Grocery</Link></li>
                    <li className="px-4 text-md"><Link to='/contact'>Contact Us</Link></li>
                    <li className="px-4 text-md">Cart</li>
                    <button className="ml-5 px-5 border-2 border-solid border-black rounded-md font-bold bg-violet-600 text-white" onClick={()=> {
                        loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login')
                    }}>{loginBtn}</button>
                    <li className="px-4 text-md font-bold"> {loggedInUser}</li>
                </ul>
            </div>
        </div>

    )
}

export default Header