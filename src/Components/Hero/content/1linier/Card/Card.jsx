import Sim from "./common/Sim.jsx";

function Card() {
  return (
    <div>
      <div className="sim-Icons flex items-center">
        <div className="for-card-and-name flex items-center">
          <Sim></Sim>
          <h3 className="font-semibold">ACHAM AE</h3>
        </div>
        <div className="for-opacity-circle flex items-center">
          <div className="p-4 opacity-60 bg-gray-200 rounded-full"></div>
          <div className="p-4 -ml-4 opacity-60 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="date">
        <h3 className="text-gray-200">11/20</h3>
      </div>
    </div>
  );
}

export default Card;
