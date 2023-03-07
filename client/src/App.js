import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import RightBar from "./components/rightbar/rightbar";
import "./style.scss"
import { DarkModeContext } from "./context/darkModeContext";
import React, { useContext } from 'react';
import { AuthContext } from "./context/authContext";

function App() {
  // cuando currentUser es false se le niega el permiso de entrada al layout cuando est true puede ingresar//
  const{ currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);
  

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          {/* <Leftbar /> */}
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  // esta funcion se encarga de hacer el filtro para darle el permiso de entrar al usuario logeado//
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // aqui se usa la funcion y recibe como children el layout para dejarlo ingresar o no//
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
