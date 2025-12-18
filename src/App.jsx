// rrd imports
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// layout
import Mainlayout from "./layouts/Mainlayout";
// pages
import Home from "./pages/Home";
import MyToDos from "./pages/MyToDos";
import Login from "./pages/Login";
import Register from "./pages/Register";
// components
import ProtectedRoutes from "./components/ProtectedRoutes";
// context
import { useGlobalContext } from "./hooks/useGlobalContext";


function App() {
  const { user, isAuthChange } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <Mainlayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/myToDos",
          element: <MyToDos />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <>{isAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
