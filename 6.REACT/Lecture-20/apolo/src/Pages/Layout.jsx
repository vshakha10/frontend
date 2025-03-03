import React from "react";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Pages from "./Pages";
import Navbar from "../Components/Navbar";
import OldProduct from "./OldProduct";
import NewProduct from "./NewProduct";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter , RouterProvider} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/pages',
        element:<Pages/>
      },
      {
        path:'/faq',
        element:<Faq/>
      },
      {
        path:'/shop',
        element:<Shop/>,
        children:[
          {
            path:'/shop/oldproduct',
            element:<OldProduct/>
          },
          {
            path:'/shop/newproduct',
            element:<NewProduct/>
          }
        ]
      }
    ]
  },
  {
    path:'*',
    element:<ErrorPage/>
  }
]) 

const Layout = () => {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/faq" element={<Faq />} >
            
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
};

export default Layout;