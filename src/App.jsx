import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/about";
import Skill from "./components/Skill";
import Work from "./components/work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import Review from "./components/Review";
import { ReactLenis } from "lenis/react";


const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App;