// import Components
import CardOne from "../2linier/content/Card1.jsx";
import CardTwo from "./content/Card2.jsx";

function TwoLinier() {
  return (
    <>
      <div className="two-linier-container flex">
        <div className="-mt-16">
          <CardOne></CardOne>
        </div>
        <div className="mt-10 -ml-40">
          <CardTwo></CardTwo>
        </div>
      </div>
    </>
  );
}

export default TwoLinier;
