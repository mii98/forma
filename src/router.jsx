import { createBrowserRouter } from "react-router";
import App from './App';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import SavedPage from "./pages/SavedPage/SavedPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewArrivalsPage from './pages/NewArrivalsPage/NewArrivalsPage';



const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage/>
            },

            {
                path: 'shop',
                element: <ShopPage />
            },

            {
                path: 'shop/:productId',
                element: <ProductPage />
            },

            {
                path: 'bag',
                element: <CartPage />
            },

            {
                path: 'saved',
                element: <SavedPage />
            },

            {
                path: 'checkout',
                element: <CheckoutPage />
            },

            {
                path: 'confirmation',
                element: <ConfirmationPage />
            },

            {
                path: 'new-arrivals',
                element: <NewArrivalsPage />
            },

            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
])


export default router;