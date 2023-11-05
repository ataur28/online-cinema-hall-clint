import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../pages/Home/Home/Home";
import AllDolls from "../pages/AllDolls/AllDolls";
import Blog from "../pages/Blog/Blog";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import DollDetails from "../pages/Home/DollDetails/DollDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddDoll from "../pages/AddDoll/AddDoll";
import MyDolls from "../pages/MyDolls/MyDolls";
import AllMyDolls from "../pages/AllMyDolls/AllMyDolls";
import PrivateRoute from "./PrivateRoute";
import UpdateDollData from "../pages/UpdateDollData/updateDollData";
import Payment from "../pages/Home/Payment/Payment";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allDolls',
                element: <AllDolls></AllDolls>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/subDolls/:subDollsId',
                element: <PrivateRoute><DollDetails></DollDetails></PrivateRoute>,
                loader: ({ params }) => fetch('http://localhost:5000/dolls')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/addDoll',
                element: <PrivateRoute><AddDoll></AddDoll></PrivateRoute>,
            },
            {
                path: '/myDoll',
                element: <PrivateRoute><MyDolls></MyDolls></PrivateRoute>,
                // loader: ({ params }) => fetch('http://localhost:5000/dolls')
            },
            {
                path: '/allMyDolls',
                element: <AllMyDolls></AllMyDolls>,
            },
            {
                path: '/updateDollData/:id',
                element: <UpdateDollData></UpdateDollData>,
                loader: ({ params }) => fetch(`http://localhost:5000/dollsDetails/${params.id}`)
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
            {
                path: '*',
                element: <ErrorElement></ErrorElement>
            }

        ]
    },
]);

export default router;
