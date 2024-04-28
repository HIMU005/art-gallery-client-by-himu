import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AllCraft from "../pages/AllCraft";
import AddCraft from "../pages/AddCraft";
import MyCraft from "../pages/MyCraft";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import UpdateCraft from "../pages/UpdateCraft";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/allCraft",
                element: <AllCraft />,
                loader: () => fetch("http://localhost:5000/crafts"),
            },
            {
                path: "/addCraft",
                element:
                    <PrivateRoute>
                        <AddCraft />,
                    </PrivateRoute>
            },
            {
                path: "/myCraft",
                element:
                    <PrivateRoute>
                        <MyCraft />
                    </PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/update/:id",
                element:
                    <PrivateRoute>
                        <UpdateCraft />
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/crafts-info/${params.id}`),
            },
            {
                path: '/myCraft/details/:id',
                element:
                    <PrivateRoute>
                        <Details />
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/crafts-info/${params.id}`),
            },
        ],
    },
]);

export default router;