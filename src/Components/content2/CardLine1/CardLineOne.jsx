import Sim from "../asset/Sim.jsx";

function CardLineOne() {
  return (
    <>
      <div className="flex items-center">
        <div className="w-[400px] rotate-12 card-content duration-300 rounded-3xl p-5 bg-white bg-opacity-25">
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
          <div className="date mt-10">
            <h3 className="text-gray-200">11/20</h3>
          </div>
          <div className="ClassName mt-5">
            <h3 className="text-2xl font-medium text-gray-100">0123 3456 6789 9012</h3>
          </div>
          <div className="flex justify-end mt-4">
            <h3 className="font-semibold text-gray-100">Twinkle</h3>
          </div>
        </div>
        <div className="flex items-center -ml-52 -rotate-12">
          <div className="w-[400px] card-content duration-300 rounded-3xl p-5 bg-white bg-opacity-25">
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
            <div className="date mt-10">
              <h3 className="text-gray-200">11/20</h3>
            </div>
            <div className="ClassName mt-5">
              <h3 className="text-2xl font-medium text-gray-100">0123 3456 6789 9012</h3>
            </div>
            <div className="flex justify-end mt-4">
              <h3 className="font-semibold text-gray-100">Twinkle</h3>
            </div>
          </div>
          <div className="circle-blue-dollar p-4 mt-40 -ml-5 shadow-xl shadow-[#90ebfd] text-gray-100 px-6 rounded-full rotate-12 bg-gradient-to-tr from-[#3ab6c8] to-[#8ceaf9]">$</div>
        </div>
      </div>
    </>
  );
}

export default CardLineOne;
