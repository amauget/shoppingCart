import App from "./App";
import ProductsPage from "./components/ProductsPage";
import Cart from "./components/Cart/Cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductInfoPage from "./components/ProductInfoPage.jsx";
//Add error handling

const routes =[
        {
            path: "/",
            element: <App />, //Viewing List of products
            children: [
                {path: '/Cart', element: <Cart />},
                {path: '/ProductsPage', element: <ProductsPage />},
                {path: '/ProductInfoPage', element: <ProductInfoPage /> }
            ],
            errorElement: <ErrorPage />
        },
    ]


export default routes
