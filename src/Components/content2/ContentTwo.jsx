import Google from "./asset/Google.svg";
import Apple from "./asset/Apple.svg";

import CardLinierOne from "./CardLine1/CardLineOne.jsx";

function ContentTwo() {
  return (
    <>
      <div className="for-blurry-background mt-60"></div>
      <div className="content2-container flex items-center justify-between">
        <div className="left">
          <div className="ClassName">
            <h3 className="text-5xl font-bold">
              Twin shopping mastercard <span className="text-md">®</span>
            </h3>
            <p className="text-base mt-9 leading-7 text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, facere ex neque, <br />
              laudantium nobis exercitationem ipsam aperiam inventore labore, recusandae <br />
              corrupti quasi remrepellendus illum provident{" "}
            </p>
            <p className="text-base mt-5 leading-7 text-gray-400 xl:w-2/3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis <br />
              vitae aut error porro non. Fugiat.
            </p>
          </div>
          <div className="for-button-execution-payment gap-5 mt-9 flex items-center">
            <div className="google-payment p-2 hover:scale-95 duration-300 px-4 flex items-center rounded-2xl gap-2 bg-gradient-to-tl from-[#0d44a8] to-[#004ece]">
              <img src={Google} alt="" width={25} />
              <h3 className="text-xl font-normal text-gray-100">Pay</h3>
            </div>
            <div className="Apple-payment p-2 hover:scale-95 duration-300 px-4 flex items-center rounded-2xl bg-gradient-to-br from-[#f3860d] to-[#f2a941] gap-2">
              <img src={Apple} alt="" width={25} />
              <h3 className="text-xl font-normal text-gray-100">Pay</h3>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <CardLinierOne></CardLinierOne>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentTwo;
