import { useRoutes, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ArticleDetails from "./pages/ArticleDetails";
import AddArticle from "./pages/AddArticle";
import Login from "./pages/Auth/Login";
import AuthService from "./api/auth/AuthService";

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
            exact: true,
        },
        {
            path: "/login",
            element: AuthService.logged() ? <Home /> : <Login />,
            exact: true,
        },
        {
            path: "/blog",
            element: <Blog />,
            exact: true,
        },
        {
            path: "/article/:id",
            element: <ArticleDetails />,
            exact: true,
        },
        {
            path: "/article/add-article",
            element: AuthService.logged() ? <AddArticle /> : <Login />,
            exact: true,
        },
        {
            path: "/project",
            element: <Project />,
            exact: true,
        },
        {
            path: "/contact",
            element: <Contact />,
            exact: true,
        },
    ]);
    return routes;
};

export default AppRoutes;
