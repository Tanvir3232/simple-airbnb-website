import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCategory from "../pages/AddCategory/AddCategory";
import AddService from "../pages/AddService/AddService";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('http://localhost:5000/categories')
        },
        {
          path:"/add-category",
          element:<AddCategory></AddCategory>
        },
        {
          path:'/add-service',
          element:<AddService></AddService>
        }
      ]
    },
  ]);
export default router;