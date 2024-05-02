import { Navigate, createBrowserRouter } from "react-router-dom";
import { Homepage, JobList } from "../components";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/jobs',
        element: <JobList />
    },
    {
        path: '*',
        element: <Navigate to="/"/>
    }
])