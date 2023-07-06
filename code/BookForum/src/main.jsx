import React from "react";
import ReactDOM from "react-dom/client";
import BookRating, { loader as jobDetailLoader } from "./routes/BookRating.jsx";
import { action as destroyRevAction } from "./routes/Reviews.jsx";
import EditRev, {
  loader as editRevLoader,
  action as editRevAction,
} from "./routes/EditRev.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage.jsx";
import Root from "./routes/root";
import AddRevForm, { action as addRevAction } from "./routes/AddRevForm.jsx";

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
    loader: jobDetailLoader,
    children: [
      {
        path: "review/:reviewId/destroy",
        action: destroyRevAction,
      },
    ],
  },
  {
    path: "/BR/:BookRatingId/review/new",
    element: <AddRevForm />,
    errorElement: <ErrorPage />,
    action: addRevAction,
  },
  {
    path: "/BR/:BookRatingId/review/:reviewId/edit",
    element: <EditRev />,
    errorElement: <ErrorPage />,
    loader: editRevLoader,
    action: editRevAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
