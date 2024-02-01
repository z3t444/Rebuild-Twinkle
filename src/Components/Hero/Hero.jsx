import Arrow from "./asset/Arrow.jsx";
import AppStore from "./asset/AppBanner.png";
import PlayStore from "./asset/PlayStoreBanner.png";
import LinierContent from "./content/1linier/OneLinier.jsx";
import TwoLinierContent from "../Hero/content/2linier/TwoLinier.jsx";
import BlurryBackground from "./asset/BlurryBackground.jsx";

// for css
import '../Hero/Hero.css'

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
            <div className="for-img">
              <img src={AppStore} alt="" width={150} />
            </div>
            <div className="for-img">
              <img src={PlayStore} alt="" width={150} />
            </div>
          </div>
        </div>
        <div className="right">
          <LinierContent></LinierContent>
          <TwoLinierContent></TwoLinierContent>
        </div>
      </div>
    </>
  );
}

export default Hero;
