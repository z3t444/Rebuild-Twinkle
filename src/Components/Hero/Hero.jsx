import Arrow from "./asset/Arrow.jsx";
import AppStore from "./asset/AppBanner.png";
import PlayStore from "./asset/PlayStoreBanner.png";
import LinierContent from "./content/1linier/OneLinier.jsx";
import TwoLinierContent from "../Hero/content/2linier/TwoLinier.jsx";
import BlurryBackground from "./asset/BlurryBackground.jsx";

// for css
import "../Hero/Hero.css";

function Hero() {
  return (
    <>
      <div>
        <BlurryBackground></BlurryBackground>
      </div>
      <div className="for-hero flex justify-between -mt-[500px]">
        <div className="left">
          <div className="flex gap-3 items-center">
            <div className="p-2 border border-gray-900 rounded-full">
              <Arrow></Arrow>
            </div>
            <p className="font-normal text-lg text-gray-400">in every beginning. there is chaos.</p>
          </div>
          <div>
            <h3 className="text-[90px] mt-10 text-[#061326] font-bold leading-[110px]">
              Peaceful <br />
              shopping. <br />
              mindful money
            </h3>
            <p className="text-lg xl:w-2/3 mt-6 leading-8 text-gray-400 font-medium">See how we can help with making your shopping experience and money management more TWIN.</p>
          </div>
          <div className="for-banner-support flex items-center gap-6 mt-10">
            <div className="for-img hover:scale-95 duration-300">
              <img src={AppStore} alt="" width={150} />
            </div>
            <div className="for-img hover:scale-95 duration-300">
              <img src={PlayStore} alt="" width={150} />
            </div>
          </div>
        </div>
        <div className="right">
          <LinierContent></LinierContent>
          <TwoLinierContent></TwoLinierContent>
        </div>
      </div>
      <div className="flex justify-center ml-[460px] -mt-32 relative">
        <div className="container-line-3">
          <div className="wrapper-card bg-white p-5 border hover:scale-105 duration-300 rounded-xl">
            <div className="line flex items-center">
              <div className="linetrough h-1 w-10 rounded-full bg-yellow-400"></div>
              <div className="linetrough h-1 w-5 -ml-1 rounded-full bg-orange-400"></div>
              <div className="linetrough h-1 w-3 -ml-1 rounded-full bg-red-500"></div>
              <div className="linetrough h-1 w-8 -ml-1 rounded-full bg-blue-500"></div>
              <div className="linetrough h-1 w-5 -ml-1 rounded-full bg-gray-400"></div>
            </div>
            <div className="ClassName">
              <h3 className="text-[13px] mt-5">All account Balance in PLN</h3>
              <h3 className="text-lg mt-1">34 885 ZT</h3>
            </div>
          </div>
          <div class="h-28 w-28 rounded-full text-center ml-36 -mt-12 bg-white bg-opacity-55 border border-gray-50">
            <h3 className="text-4xl mt-6">...</h3>
          </div>
          <div className="for-circle-dolar-bg-blue ml-56 shadow-md shadow-[#28a1b6] -mt-12 h-6 w-6 flex items-center rounded-full p-6 bg-gradient-to-br from-[#90ecff] to-[#28a1b6]">
            <h5 className="font-bold -ml-1 text-md  text-white">$</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
