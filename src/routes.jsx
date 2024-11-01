import App from "./App";

// import ErrorPage from "./assets/ErrorPage";



const routes = [
    {
        path: "/",
        element: <App />, //home
        // errorElement: <ErrorPage />
    },
        {
        path: "profile",
        // element: <Profile />,
        children: [
        // {index: true, element: <DefaultProfile />},
        { /* path: "spinach", element: <Spinach /> */ },
        { /* path: "popeye", element: <Popeye />  */},
        ], 
        
    },
        // the other option is to use dynamic segments which are indicated with a colon ":"
/*     {
        path: "profile/:name", //For name params, see Profile.jsx
        element: <Profile />,
    }, */
    
]

export default routes
