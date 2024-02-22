import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import MediaNews from "./components/MediaNews/MediaNews";
import Purchase from "./components/Purchase/Purchase";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Community from "./components/Community/Community";



export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Dashboard/>} />
          <Route path="About" element={<About />} />
          <Route path="MediaNews" element={<MediaNews />} />
          <Route path="Purchase" element={<Purchase/>}/>
          <Route path="Community" element={<Community/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Navbar" element={<Navbar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);