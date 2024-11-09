import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "@pages/About/About";
import NotFound from "@pages/NotFound/NotFound";
import Dashboard from "@pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
