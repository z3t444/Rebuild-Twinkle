import CircleYellow from "./assets/CircleDollar.jsx";
import Cardglasshmorp from "./Card/Card.jsx";
import CircleState from "./assets/CircleState.jsx";

function OneLinier() {
  return (
    <>
      <div className="one-linier-container">
        <div className="one-linier flex">
          <CircleYellow></CircleYellow>
          <Cardglasshmorp></Cardglasshmorp>
          <CircleState></CircleState>
        </div>
      </div>
    </>
  );
}

export default OneLinier;
