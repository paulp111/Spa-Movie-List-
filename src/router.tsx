import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import RootElement, {
} from "./RootElement";
import Movie from "./Movie";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <RootElement />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/movies/:id", 
          element: <Movie />,

        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}