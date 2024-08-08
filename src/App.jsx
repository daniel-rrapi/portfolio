import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BarLinks from "./components/BarLinks.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contacts.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BarLinks></BarLinks>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contacts></Contacts>
    </>
  );
}

export default App;
