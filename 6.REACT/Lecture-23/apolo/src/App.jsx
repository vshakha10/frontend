import "./App.css";
// import Home from "./Pages/Home";
// import AboutUs from "./Pages/AboutUs";
// import Faq from "./Pages/Faq";
// import ContactUs from "./Pages/ContactUs";
// import Login from "./Pages/Login";
// import Pages from "./Pages/Pages";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router  , Routes , Route } from "react-router-dom";

import Layout from "./Pages/Layout";

// BrowserRouter , Routes , Route 


function App() {

  return (
    <>
    {/* <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
    </Router> */}
    <Layout/>
    </>
  );
}

export default App;