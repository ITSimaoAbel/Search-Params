import { createBrowserRouter } from "react-router-dom";
import { Users } from "/pages/user";
import { Home } from "./pages/home";
import { About } from "./pages/about";


export const route = createBrowserRouter([
   {
      path: "/",
      element: <Home />
   },
   {
      path: "about",
      component: <About />,
   },
   {
      path: "user",
      componets: <Users />,
   },
]);