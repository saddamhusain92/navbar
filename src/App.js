import Nvigationbar from "./Component/Nvigationbar/Nvigationbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Code from "./Pages/Code/Code";
import News from "./Pages/News/News";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Play from "./Pages/Play/Play";
import Login from "./Pages/Login/Login";
import Ragister from "./Pages/Register/Ragister";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Nvigationbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/code" element={<Code/>} />
          <Route path="/new" element={<News />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/play" element={<Play/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Ragister/>} />

          
       
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
