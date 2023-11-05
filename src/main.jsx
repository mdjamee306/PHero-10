import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Error from './Pages/Error.jsx';
import BrandDetails from './Components/Brands/BrandDetails.jsx';
import Contact from './Pages/Contact.jsx';
import AuthProvider from './porviders/AuthProvider.jsx';
import PrivateRoutes from './Pages/PrivateRoutes.jsx';
import Detail from './Components/Brands/Detail.jsx';
import Update from './Pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/product',
        element: <PrivateRoutes><Product></Product></PrivateRoutes>
      },
      {
        path: '/cart',
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
        loader: () => fetch('https://b8a10-brandshop-server-side-mdjamee306.vercel.app/cart')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/brands/:brand',
        element: <PrivateRoutes><BrandDetails></BrandDetails></PrivateRoutes>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/brand/:id',
        element: <Detail></Detail>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-mdjamee306.vercel.app/product/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-mdjamee306.vercel.app/product/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
