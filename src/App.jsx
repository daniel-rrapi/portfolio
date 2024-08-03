import "./App.scss";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BarLinks from "./components/BarLinks.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BarLinks></BarLinks>
      <Hero></Hero>
      <About></About>
    </>
  );
}

export default App;
