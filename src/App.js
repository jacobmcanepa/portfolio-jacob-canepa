import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  let component
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
      break
    case "/contact":
      component = <Contact />
      document.title = "Contact"
      break
    default:
  }

  return (
    <div>
      <Navigation />
      <main>
        {component}
      </main>
    </div>
  );
}

export default App;
