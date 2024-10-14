import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index/Index";
import Courses from "./pages/Courses/Courses";
import Articles from "./pages/Articles/Articles";
import MainCourse from "./pages/MainCourse/MainCourse";
import MainArticle from "./pages/MainArticle/MainArticle";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAccount from "./pages/Dashboard/MyAccount";
import MyCourses from "./pages/Dashboard/MyCourses";
import Tickets from "./pages/Dashboard/Tickets";
import EditAccount from "./pages/Dashboard/EditAccount";
import NewTicket from "./pages/Dashboard/NewTicket";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "courses/:courseId",
    element: <MainCourse />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "articles/:articleId",
    element: <MainArticle />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "courses",
        element: <MyCourses />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "edit-account",
        element: <EditAccount />,
      },
      {
        path: "new_ticket",
        element: <NewTicket />,
      },
    ],
  },
]);

export default router;
