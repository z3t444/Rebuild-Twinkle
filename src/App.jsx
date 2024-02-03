// for content section
import RootHeader from "./Components/Header/Header.jsx";
import RootHero from "./Components/Hero/Hero.jsx";
import Feature from "./Components/CardFeature/Feature.jsx";
import ContentOne from "./Components/content1/ContentOne.jsx";
import ContentTwo from "./Components/content2/ContentTwo.jsx";
import "./App.css";

function App() {
  return (
    <div className="RootSection InterTight w-[1300px] mt-12 mx-auto">
      <RootHeader></RootHeader>
      <RootHero></RootHero>
      <Feature></Feature>
      <ContentOne></ContentOne>
      <ContentTwo></ContentTwo>
    </div>
  );
}

export default App;
