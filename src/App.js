import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
// import About from "./components/About"
// import Grocery from "./components/Grocery"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import UserContext from "./components/utils/UserContext"

const AppLayout = () => {
    const [userName, setUserName] = useState('')
    useEffect(()=> {
        setUserName('SAI')
    }, [])
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const Grocery = lazy(() => import('./components/Grocery'))

const About = lazy(() => import('./components/About'))

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Body /> },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>About page is lazily loading...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            { path: '/contact', element: <Contact /> },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Page is loading...</h1>}>
                        <Grocery />
                    </Suspense>
                )
            },
            { path: '/restaurants/:resId', element: <RestaurantMenu /> }
        ],
        errorElement: <Error />
    },
    // { path: '/about', element: <About /> },
    // { path: '/contact', element: <Contact/>}
])

const rootelement = ReactDOM.createRoot(document.getElementById('root'))

rootelement.render(
    <RouterProvider router={appRouter} />
)
