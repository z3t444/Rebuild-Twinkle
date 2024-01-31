import Arrow from "./asset/Arrow.jsx";

function Hero() {
  return (
    <div className="for-hero">
      <div className="left">
        <div className="flex gap-2 items-center">
          <div className="p-2 border border-gray-900 rounded-full">
            <Arrow></Arrow>
          </div>
          <p className="font-normal text-sm text-gray-400">in every beginning. there is chaos.</p>
        </div>
        <div>
          <h3 className="text-6xl mt-10 text-[#061326] font-bold xl:w-1/4 leading-[70px]">Peaceful shopping. mindful money</h3>
          <p className="text-sm xl:w-1/5 mt-6 leading-6 text-gray-400 font-medium">See how we can help with making your shopping experience and money management more TWIN</p>
        </div>
        <div className="for-banner-support">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Hero;
