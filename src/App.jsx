import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Updates from './pages/blog.jsx'
import Work from './pages/work.jsx'
import SippersCoffeeHouse from "./pages/SippersCoffeeHouse.jsx"
import TempleGym from "./pages/TempleGym.jsx"
import ArtsCorner from "./pages/ArtsCorner.jsx"
import WaterDay from "./pages/WaterDay.jsx"
import JewishVoice from "./pages/JewishVoice.jsx"
import GiveCleanWater from "./pages/GiveCleanWater.jsx"
import SMF from "./pages/SMF.jsx"
import Career from "./components/Career/Career.jsx"
import Resume from "./pages/Resume.jsx"
import NewProject from "./pages/NewProject.jsx"
import BlogLists from "./components/Blog/BlogLists.jsx"
import BlogDetails from "./components/Blog/BlogDetails.jsx"



function App() {
 
  return (
    <>
      <BrowserRouter basename="/2024-Portfolio/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/SippersCoffeeHouse" element={<SippersCoffeeHouse />} />
          <Route path="/TempleGym" element={<TempleGym />} />
          <Route path="/ArtsCorner" element={<ArtsCorner />} />
          <Route path="/waterday" element={<WaterDay />} />
          <Route path="/jewishvoice" element={<JewishVoice />} />
          <Route path="/GiveCleanWater" element={<GiveCleanWater />} />
          <Route path="/SMF" element={<SMF />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/BlogDetails/:id" element={<BlogDetails />} />
          <Route path="/BlogLists" element={<BlogLists />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
