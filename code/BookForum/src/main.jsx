import React from 'react'
import ReactDOM from 'react-dom/client'
import BookRating,{loader as jobDetailLoader} from './routes/BookRating.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './ErrorPage.jsx';
import Root from './routes/root';




const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //loader: rootLoader,
  },
  {
    path: "/BR/:BookRatingId",
    element: <BookRating />,
    errorElement: <ErrorPage />,
    loader: jobDetailLoader
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
