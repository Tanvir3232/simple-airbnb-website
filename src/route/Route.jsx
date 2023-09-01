import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCategory from "../pages/AddCategory/AddCategory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/add-category",
          element:<AddCategory></AddCategory>
        }
      ]
    },
  ]);
export default router;