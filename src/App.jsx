
import './App.css'

import FrontPage from "./pages/FrontPage.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import AboutOurProgram from "./pages/AboutOurProgram.jsx";

import {getNavbarHeight, getScreenWidth} from "./Window.jsx";
import Navbar from "./components/ui/Navbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import {BrowserRouter, Routes, Route, Links} from "react-router-dom";

function App() {
    let screenWidth = document.body.clientWidth+'px';
    console.log(screenWidth);
    return (
      <BrowserRouter>
          <Navbar/>
          <div className = 'w-(--s-width) mt-(--s-nvh) dark:bg-black' style = {{'--s-width': getScreenWidth(), '--s-nvh': getNavbarHeight()}}>
              <Routes>
                  <Route path = '/' element = {<FrontPage/>}/>
                  <Route path = '/about' element = {<AboutOurProgram/>}/>
                  <Route path = '/team' element = {<OurTeam />}/>
              </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
    );
}

export default App
