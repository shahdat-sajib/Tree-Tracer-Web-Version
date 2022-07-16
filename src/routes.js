import React from "react";

const HomePage = React.lazy(() =>
    import("./Components/HomePage/HomePage.js")
);

const routes = [
    {
        path: "/Homepage",
        exact: true,
        name: "Default", 
        component: HomePage
    },
];

export default routes;