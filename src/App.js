import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/home' element={ <Home /> } />
        <Route exact path='/about' element={ <About /> } />
        <Route exact path='/work' element={ <Work /> } />
        <Route exact path='/contact' element={ <Contact /> } />
        <Route exact path='*' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;