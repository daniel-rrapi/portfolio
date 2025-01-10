import "./App.scss";
import Navbar from "./components/Navbar/Navbar.component.jsx";
import Hero from "./components/Hero/Hero.component.jsx";
import BarLinks from "./components/BarLinks/BarLinks.component.jsx";
import About from "./components/About/About.component.jsx";
import Projects from "./components/Projects/Projects.component.jsx";
import Contacts from "./components/Contacts/Contacts.component.jsx";

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
