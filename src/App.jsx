import Login from "./Components/Login"
import { createBrowserRouter, RouterProvider, Outlet,  } from "react-router";


function App() {

  const appRouter = createBrowserRouter([
     {
        path: "/",
        element: <Login />,
      },
       {
        path: "/browse",
        element: <Login />,
      },
  ])
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
