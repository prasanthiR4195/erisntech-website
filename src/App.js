import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Blog, Home } from "./containers";
import About from "./containers/AboutUs/About"
import { Footer, Navbar } from "./components";
import ContactUs from "./components/ContactUs/ContactUs";
import WebDev from "./containers/WebDev/WebDev";
import TermOfPayment from "./containers/TermOfPayment/TermOfPayment";
import PrivacyPolicy from "./containers/PrivacyPolicy/PrivacyPolicy";
import PartnerWithUs from "./containers/PartnerWithUs/PartnerWithUs";
import SoftwareDev from "./containers/SoftwareDev/SoftwareDev";
import MobileDev from "./containers/MobileDev/MobileDev";
import UXDesign from "./containers/Branding/UXDesign";
import DigitalMarketing from "./containers/DigitalMarketing/DigitalMarketing";
import Android from "./containers/AndroidDev/Android";
import UXDev from "./containers/UXDev/UXDev";
import LogoDesigning from "./containers/LogoDesigning/LogoDesigning";
import HybridApp from "./containers/HybridApp/HybridApp";
import BrochureDesign from "./containers/BrochureDesign/BrochureDesign";

 
function App() {

  return (
    <div className="App"> 
      <Navbar/>
      <Routes> 
        <Route path="/*" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path='/webdev' element={<WebDev/>} />
        <Route path='/mobiledev' element={<MobileDev/>} />
        <Route path='/uxdesign' element={<UXDesign/>}/>
        <Route path='/softwaredev' element={<SoftwareDev/>}/>
        <Route path='/digitalmarketing' element={<DigitalMarketing/>}/>
        <Route path='/androiddev' element={<Android/>}/>
        <Route path='/uxdev' element={<UXDev/>}/>
        <Route path='/logodesign' element={<LogoDesigning/>}/>
        <Route path='/hybridapp' element={<HybridApp/>}/>
        <Route path='/brochure' element={<BrochureDesign/>}/>

        <Route path='/contactus' element={<ContactUs />}/>
        <Route path="/term" element={<TermOfPayment/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/partnerwithus" element={<PartnerWithUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
