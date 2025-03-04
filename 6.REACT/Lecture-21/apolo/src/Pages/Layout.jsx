import React from "react";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Pages from "./Pages";
import Navbar from "../components/Navbar";
import OldProduct from "./OldProduct";
import NewProduct from "./NewProduct";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import CareerData from "./CareerData";
import Career from "./Career";
import CareerLayout from "./CareerLayout";
import { CareerApiData } from "./Career";
import SingleProductCard from "./SingleProductCard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter , RouterProvider , createRoutesFromElements} from "react-router-dom";

// const routes = createBrowserRouter([
//   {
//     path:'/',
//     element:<Navbar/>,
//     children:[
//       {
//         index:true,
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element:<AboutUs/>
//       },
//       {
//         path:'/contact',
//         element:<ContactUs/>
//       },
//       {
//         path:'/login',
//         element:<Login/>
//       },
//       {
//         path:'/pages',
//         element:<Pages/>
//       },
//       {
//         path:'/faq',
//         element:<Faq/>
//       },
//       {
//         path:'/shop',
//         element:<Shop/>,
//         children:[
//           {
//             path:'/shop/oldproduct',
//             element:<OldProduct/>
//           },
//           {
//             path:'/shop/newproduct',
//             element:<NewProduct/>
//           }
//         ]
//       },
//       {
//         path:'*',
//         element:<ErrorPage/>
//       }
//     ]
//   },
 
// ]) 


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
        <Route index  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/shop" element={<Shop/>}> 
            {/* <Route path="/shop/oldproduct" element={<OldProduct/>}/>
            <Route path="/shop/newproduct" element={<NewProduct/>}/> */}
            <Route path="/shop/:id" element={<SingleProductCard/>} />
        </Route>
        <Route path="/careerlayout" element={<CareerLayout/>}>
            <Route path="/careerlayout/career" element={<Career/>} loader={<CareerApiData/>}/>
            <Route path="/careerlayout/careerdata" element={<CareerData/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)

// /shop/:id

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