import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Outlet,
  Navigate,
  } from "react-router-dom";

import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Write from "./pages/Write"
import SinglePost from "./pages/SinglePost"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";

import "./styles/login_style.scss"
import Admin from "./pages/Admin";
import AdminNavbar from "./components/AdminNavbar";
import AdminUsers from "./pages/AdminUsers";
import Calendar from "./pages/Calendar";

function App() {

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const LayoutAdmin = () => {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const {currentUser} = useContext(AuthContext);

const ProtectedRoute = ({children}) => {
  if(currentUser.role != 'user'){
    return <Navigate to="/"/>
  }
  return children;
}


const router = createBrowserRouter([
{
  path: "/",
  element: <Layout/>,
  children:[
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/post/:id",
      element: <SinglePost/>
    },
    {
      path: "/write",
      element: <Write/>
    },
    {
      path: "/calendar",
      element: <Calendar/>
    },
  ]
},
{
  path: "/login",
  element: <Login/>,
},
{
  path: "/register",
  element: <Register/>,
},
{
  path: "/admin",
  element: <LayoutAdmin/>,
  children:[
    {
      path: "/admin",
      element: <ProtectedRoute><Admin/></ProtectedRoute>
    },
    {
      path: "/admin/users",
      element: <ProtectedRoute><AdminUsers/></ProtectedRoute>
    },
  ]
}
]);
  

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
