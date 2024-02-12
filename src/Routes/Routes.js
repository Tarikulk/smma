import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Home from "../Pages/Home/HomeContainer/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            }
        ]
    }
]);