import { Navigate, createBrowserRouter } from "react-router-dom";
import { Homepage, JobList } from "../components";

export const route = createBrowserRouter([
    {
        path: `/Linkedin-Search-React/`,
        element: <Homepage />
    },
    {
        path: '/Linkedin-Search-React/jobs',
        element: <JobList />
    },
    {
        path: '*',
        element: <Navigate to='/Linkedin-Search-React/' />
    }
])