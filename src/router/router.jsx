import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import LoanInfo from "../pages/LoanInfo";
import UserDashboard from "../pages/UserDashboard";
import UserLoginPage from "../pages/UserLoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "category",
        element : <CategoryPage/>
      },
      {
        path : "loanInfo",
        element : <LoanInfo/>
      },
      {
        path : "userDashboard",
        element : <UserDashboard/>
      },
      {
        path: '/login',
        element: <UserLoginPage/>
      }
      
    ],
  },
]);

export default router;
