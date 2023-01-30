import {
  createBrowserRouter,
  RouterProvider,
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
import Calendar from "./pages/Calendar/Calendar";
import AddNewUser from "./pages/AddNewUser";
import Sponsor from "./pages/Sponsor";
import AddSponsor from "./pages/AddSponsor"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import ProfileThreeColGrid from "./pages/ProfileThreeColGrid"


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
  if(!currentUser || currentUser.role !== 'admin'){
    return <Navigate to="/"/>
  }
  return children;
}

const ProtectedRouteCC = ({children}) => {
  if(!currentUser || currentUser.role !== 'content_creator' && currentUser.role !== 'admin'){
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
      element: <ProtectedRouteCC><Write/></ProtectedRouteCC>
    },
    {
      path: "/calendar",
      element: <Calendar/>
    },
    {
      path: "/sponsors",
      element: <Sponsor/>
    },
    {
      path: "/sponsors/new",
      element: <AddSponsor/>
    },
    {
      path: "/contacts",
      element: <Contact/>
    },
    {
      path: "/gallery",
      element: <Gallery/>
    },
    {
      path: "/personal",
      element: <ProfileThreeColGrid/>
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
  path: "/users/new",
  element: <ProtectedRoute><AddNewUser/></ProtectedRoute>
},
{
  path: "/users/view",
  element: <ProtectedRoute></ProtectedRoute>
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
