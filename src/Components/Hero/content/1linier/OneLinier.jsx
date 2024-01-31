import CircleYellow from "./assets/CircleDollar.jsx";
import Cardglasshmorp from "./Card/Card.jsx";
import CircleState from "./assets/CircleState.jsx";

function OneLinier() {
  return (
    <>
    {/* linier 1 */}
      <div className="one-linier-container">
        <div className="one-linier gap-5 flex">
          <div className="mt-24 ml-10">
            <CircleYellow></CircleYellow>
          </div>
          <Cardglasshmorp></Cardglasshmorp>
          <div className="mt-24 -ml-14">
            <CircleState></CircleState>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneLinier;
