// for content section
import RootHeader from "./Components/Header/Header.jsx";
import RootHero from "./Components/Hero/Hero.jsx";
import Feature from "./Components/CardFeature/Feature.jsx";
import ContentOne from "./Components/content1/ContentOne.jsx";
import ContentTwo from "./Components/content2/ContentTwo.jsx";
import TrustedContent from "./Components/Trusted/Trusted.jsx";
import ContentTree from "./Components/Content3/ContentTree.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <div className="RootSection InterTight w-[1400px] mt-12 mx-auto">
        <RootHeader></RootHeader>
        <RootHero></RootHero>
        <Feature></Feature>
        <ContentOne></ContentOne>
        <ContentTwo></ContentTwo>
        <TrustedContent></TrustedContent>
        <ContentTree></ContentTree>
      </div>
    </div>
  );
}

export default App;
