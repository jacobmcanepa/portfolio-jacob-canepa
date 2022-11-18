import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  let component;
  let isFooter = true;
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/home":
      component = <Home />
      break
    case "/about":
      component = <About />
      document.title = "About"
      break
    case "/work":
      component = <Work />
      document.title = "Work"
      isFooter = false;
      break
    case "/contact":
      component = <Contact />
      document.title = "Contact"
      break
    default:
  }

  if (isFooter) {
    return (
      <>
      <Navigation />
      <main>
        {component}
      </main>
      <Footer />
      </>
    );
  } else {
    return (
      <>
      <Navigation />
      <main>
        {component}
      </main>
      </>
    );
  }
}

export default App;
