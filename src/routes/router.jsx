import { createBrowserRouter } from 'react-router-dom';
import ProductsLayout from '../layouts/ProductsLayout';
import Root from '../layouts/Root';
import CartPage from '../pages/CartPage';
import Contact from '../pages/Contact';
import Electronics from '../pages/Electronics';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Jewelery from '../pages/Jewelery';
import Login from '../pages/Login';
import MensClothing from '../pages/MensClothing';
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
import Register from '../pages/Register';
import WomensClothing from '../pages/WomensClothing';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <ProductsLayout />,
        children: [
          {
            path: '/products/all',
            element: <Products />,
          },
          {
            path: '/products/electronics',
            element: <Electronics />,
          },
          {
            path: '/products/jewelery',
            element: <Jewelery />,
          },
          {
            path: '/products/mens-clothing',
            element: <MensClothing />,
          },
          {
            path: '/products/womens-clothing',
            element: <WomensClothing />,
          },
        ],
      },
      {
        path: '/products/:id',
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <CartPage />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
