import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import Home from './app/pages/Home';
import Shop from './app/pages/Shop';
import Cart from './app/pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  } ,
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
