import App from "./App";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart/Cart";
// import ErrorPage from "./assets/ErrorPage";
const routes =[
        {
            path: "/",
            element: <App />, //Viewing List of products
            children: [
                {path: '/components/Cart/Cart.jsx', element: <Cart />},
                {path: '/components/ProductPage.jsx', element: <ProductPage />}
            ]
            // errorElement: <ErrorPage />
        },
    ]


export default routes
