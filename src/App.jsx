import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
export const App = () => {

  return (
    <>
     <h1>Hello  World</h1>
     <RouterProvider router={route} />
    </>
  )
}

