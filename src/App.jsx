import Login from "./Components/Login"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Browse from "./Components/Browse";



function App() {


  const appRouter = createBrowserRouter([
     {
        path: "/",
        element: <Login />,
      },
       {
        path: "/browse",
        element: <Browse />,
      },
  ])

  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
