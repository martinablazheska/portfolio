import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "@/pages/layout/layout";
import HomePage from "@/pages/home/page";
import ProjectPage from "@/pages/project/page";
import MusicButton from "@/components/MusicButton";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { element: <ProjectPage />, path: "/project/:projectId" },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <MusicButton />
    </>
  );
}

export default App;
