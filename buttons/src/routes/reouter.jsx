import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ButtonsComponents, InputPage } from "../pages";

export const router = createBrowserRouter([
    
    {
        path: "/",
        element:<ButtonsComponents/>
    },
    {
        path: "/buttons",
        element:<ButtonsComponents/>
    },
    {
        path: "/inputs",
        element:<InputPage/>
    },



])