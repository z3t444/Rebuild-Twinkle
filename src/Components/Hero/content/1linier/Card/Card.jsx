import Sim from "../assets/Sim.jsx";
import '../Card/Card.css'

function Card() {
  return (
    <div className="w-[450px] hover:scale-105 card-content  duration-300 rounded-3xl p-5 bg-white bg-opacity-25">
      <div className="sim-Icons flex items-center justify-between">
        <div className="for-card-and-name gap-2 flex items-center">
          <Sim></Sim>
          <h3 className="font-semibold text-gray-100">ACHAM AE</h3>
        </div>
        <div className="for-opacity-circle flex items-center">
          <div className="p-5 opacity-60 bg-gray-100 rounded-full"></div>
          <div className="p-5 -ml-4 opacity-60 bg-gray-100 rounded-full"></div>
        </div>
      </div>
      <div className="date mt-20">
        <h3 className="text-gray-200">11/20</h3>
      </div>
      <div className="ClassName mt-5">
        <h3 className="text-2xl font-medium text-gray-100">0123 3456 6789 9012</h3>
      </div>
      <div className="flex justify-end mt-4">
        <h3 className="font-semibold text-gray-100">Twinkle</h3>
      </div>
    </div>
  );
}

export default Card;
