import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "./Layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SignupForm from "./pages/Sigup";
import LoginForm from "./pages/Login";
import Services from "./pages/Services";
import AdminLoginForm from "./admin/adminLogin";
import AdminDashboard from "./admin/admin";
import {ProtectedRoute} from "./admin/protectedRoute"
import LeranystRegistration from "./pages/Register";
import AdminDashboardRegistered from "./admin/RegisteredUserAdmin";
export default function App() {

const router =createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  // errorElement:<ErrorPage></ErrorPage>
  children:[{
    path:"/",
    element:<Home></Home>
  }

,{
  path:"/services",
  element:<Services></Services>
}
]
},
{
  path:"*",
  element:<ErrorPage></ErrorPage>
},

{
  path:"/signup",
  element:<SignupForm/>
},
{
  path:"/login",
  element:<LoginForm/>
}
,
{
  path:"adminLogin",
  element:<AdminLoginForm></AdminLoginForm>
},

{
  path:"/admin",
  element:<ProtectedRoute><AdminDashboard></AdminDashboard></ProtectedRoute>
},

{
  path:"/register",
  element:<LeranystRegistration></LeranystRegistration>
},
{
  path:"registered",
  element:<ProtectedRoute><AdminDashboardRegistered></AdminDashboardRegistered></ProtectedRoute>
}

])


  return (
<>
  <RouterProvider router={router}>
    {/* <ThemeProvider> */}
    
        
 
    {/* </ThemeProvider> */}
    </RouterProvider>
    
    
    </>
  );
}
