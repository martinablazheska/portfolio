import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/home/page";
import Layout from "@/pages/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
