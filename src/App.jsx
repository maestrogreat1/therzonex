// import {Navbar,Home,About,Coaching,Contact,Footer,Group} from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Deep from "./pages/Deep";
import Sessions from "./pages/Sessions";
import Contact from "./components/container/Contact";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    // <div className="font-Poppins bg-Solitude">
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Coaching />
    //   <Group />
    //   <Contact />
    //   <Footer />
      
    // </div>
    
    <BrowserRouter className="font-Poppins bg-Solitude">
      <Toaster />
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="deep" element={<Deep />} />
        <Route path="care" element={<Sessions />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
