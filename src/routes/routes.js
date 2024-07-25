import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPage from "../pages/ProjectsPage";
import TechStacksPage from "../pages/TechStacksPage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";

const routes=createBrowserRouter([
    {
        path:'/',
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/About',
                element:<AboutPage/>
            },
            {
                path:'/Experience',
                element:<ExperiencePage/>
            },
            {
                path:'/Projects',
                element:<ProjectsPage/>
            },
            {
                path:'/Tech-Stacks',
                element:<TechStacksPage/>
            },
            {
                path:'/Contact',
                element:<ContactPage/>
            }
        ],
        errorElement:<ErrorPage/>
    }
])

export default routes