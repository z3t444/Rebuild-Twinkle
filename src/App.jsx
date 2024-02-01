// for content section
import RootHeader from "./Components/Header/Header.jsx";
import RootHero from "./Components/Hero/Hero.jsx";
import Feature from './Components/CardFeature/Feature.jsx'
import "./App.css";

function App() {
  return (
    <div className="RootSection InterTight w-[1400px] mt-12 mx-auto">
      <RootHeader></RootHeader>
      <RootHero></RootHero>
      <Feature></Feature>
    </div>
  );
}

export default App;
