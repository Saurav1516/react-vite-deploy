import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Faqs from "./components/Faqs";
import SuccessStories from "./components/SuccessStories";
import ClientLogo from "./components/ClientLogo";

function App() {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <SuccessStories />
        <ClientLogo />
        <Faqs />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
