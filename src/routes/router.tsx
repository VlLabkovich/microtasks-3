import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Prices} from "../components/pages/Prices";
import {Adidas} from "../components/pages/sneakers/Adidas";
import {Model} from "../components/pages/sneakers/Model";
import {Nike} from "../components/pages/sneakers/Nike";
import {Puma} from "../components/pages/sneakers/Puma";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    PRICES: '/prices',
    MODEL: '/:brand/:id/'
} as const

export const router = createBrowserRouter([

    {
        path: "/",
        element:  <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas />,
            },
            {
                path: PATH.PUMA,
                element: <Puma />,
            },
            {
                path: PATH.NIKE,
                element: <Nike />,
            },
            {
                path: PATH.PRICES,
                element: <Prices />,
            },
            {
                path: PATH.MODEL,
                element: <Model />,
            },
        ]
    }
]);

// <Route path={PATH.PAGE5} element={<Model/>}/>