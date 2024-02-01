// for content section
import RootHeader from "./Components/Header/Header.jsx";
import RootHero from "./Components/Hero/Hero.jsx";
import "./App.css";

function App() {
  return (
    <div className="RootSection InterTight w-[1500px] mt-16 mx-auto">
      <RootHeader></RootHeader>
      <RootHero></RootHero>
    </div>
  );
}

export default App;
