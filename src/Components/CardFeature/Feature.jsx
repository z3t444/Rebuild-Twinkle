import CardXml from "./asset/Card.svg";
import VIcons from "./asset/V.svg";
import DollarChange from "./asset/DollarChange.svg";
import GoogleIcons from "./asset/Google.svg";
import Apple from "./asset/Apple.svg";

function Feature() {
  return (
    <>
      <div className="flex mt-32 gap-8 justify-center">
        <div className="card-feature p-6 rounded-[35px] hover:-mt-5 duration-300 shadow-2xl shadow-sky-300 h-60 w-52 bg-gradient-to-br from-[#91edff] to-[#07b9df]">
          <img src={VIcons} alt="v icons" width={50} />
          <h3 className="text-lg font-medium leading-6 text-white mt-7 w-40">Multicurrency account</h3>
          <p className="text-sm w-40 mt-2 text-gray-100">Many currencies for all your needs</p>
        </div>
        <div className="card-feature p-6 rounded-[35px] hover:-mt-5 duration-300 shadow-2xl shadow-gray-900 h-60 w-52 bg-gradient-to-br from-[#4a4f4e] to-[#1a1a1c]">
          <img src={CardXml} alt="card icons" width={50} />
          <h3 className="text-lg font-medium text-white mt-7">Cards</h3>
          <p className="text-sm leading-6 w-40 mt-2 text-gray-100">TWIN Mastercard? for shopping enlightment</p>
        </div>
        <div className="card-feature p-6 rounded-[35px] hover:-mt-5 duration-300 shadow-2xl shadow-[#f7505a] bg-gradient-to-br h-60 w-52 from-[#ff909b] to-[#f7505a]">
          <img src={DollarChange} alt="dollar change icons" width={50} />
          <h3 className="text-lg font-medium leading-6 text-white mt-6">
            Top=up & <br />
            Sendouts
          </h3>
          <p className="text-sm mt-2 leading-6 text-gray-100">
            Transfer your funds <br />
            the way you want
          </p>
        </div>
        <div className="card-feature p-6 rounded-[35px] hover:-mt-5 duration-300 bg-gradient-to-br shadow-2xl shadow-[#0647c4] from-[#2d9cf6] to-[#0647c4] h-60 w-52">
          <img src={GoogleIcons} alt="" width={50} />
          <h3 className="text-lg font-medium text-white mt-7">Google Pay</h3>
          <p className="text-sm text-gray-100 mt-2 leading-6">
            Pay anywhere. the <br />
            way you like with <br />
            TWIN and Google Pay
          </p>
        </div>
        <div className="card-feature p-6 rounded-[35px] hover:-mt-5 duration-300 bg-gradient-to-br from-[#fcae48] to-[#dd7d0f] shadow-2xl shadow-[#dc7d0e] h-60 w-52">
          <img src={Apple} alt="" width={50} />
          <h3 className="font-medium text-lg text-white mt-7">Apple Pay</h3>
          <p className="text-sm leading-6 mt-2 text-gray-100">
            Pay anywhere. the <br />
            way you like with <br />
            TWIN and Apple Pay
          </p>
        </div>
      </div>
    </>
  );
}

export default Feature;
