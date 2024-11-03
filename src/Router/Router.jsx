
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home/Home';
import Root from '../components/Root/Root';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Statistics from '../components/Statistics/Statistics';
import Dashboard from '../components/Dashboard/Dashboard';
import Cart from '../components/Cart/Cart';
import Wishlist from '../components/Wishlist/Wishlist';

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root/>,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/statistics",
              element: <Statistics/>,
            },
            {
              path: "cart",
              element: <Cart />,
            
            },
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/wishlist",
              element: <Wishlist />,
            
            },
          ],
        },
      ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Router