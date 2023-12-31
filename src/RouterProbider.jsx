import { createBrowserRouter } from "react-router-dom";
import MainUi from "./MainUi";
import Home from "./components/Home/Home";
import Detail from "./components/Home/home-pages/Detail";
import Favorite from "./components/favorite/Favorite";

const Provider = createBrowserRouter([
    {
        path: '/',
        element: <MainUi></MainUi>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/favorites',
                element: <Favorite></Favorite>,
                loader:()=>fetch('../phone.json')
            },
            {
                path: '/login',
                element: <h2>login</h2>
            },
            {
                path: '/detail/:id',
                element: <Detail></Detail>,
                loader: () => fetch('../phone.json')
            },
        ]
    }
]);


export default Provider;