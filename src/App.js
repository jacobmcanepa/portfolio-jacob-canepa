import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='home' element={ <Home /> } />
        <Route path='about' element={ <About /> } />
        <Route path='work' element={ <Work /> } />
        <Route path='contact' element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;