import AdobeCompany from "./asset/adobeCompany.jsx";
import AmazonCompany from "./asset/amazonCompany.jsx";
import DigitalOcean from "./asset/digitalOcean.jsx";
import FacebookCompany from "./asset/facebookCompany.jsx";
import TeslaCompany from "./asset/teslaCompany.jsx";

function Trusted() {
  return (
    <>
      <div className="Trusted-container mt-60">
        <div className="contain text-center">
          <h3 className="text-5xl font-bold">Twinkle Trusted!</h3>
          <p className="xl:w-1/2 mx-auto mt-6 text-lg text-gray-400 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ratione provident ea veritatis! Vero doloribus soluta accusamus facere voluptatibus,</p>
        </div>
        <div className="flex justify-center">
          <div className="for-bg-blurry-gradient mx-auto mt-32 flex blur-[150px]">
            <div className="flex items-center gap-10">
              <div className="ClassCircle px-32 py-32 bg-purple-500 rounded-full"></div>
              <div className="ClassCircle px-32 py-32 bg-blue-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-10">
              <div className="ClassCircle px-32 py-32 bg-pink-600 rounded-full"></div>
              <div className="ClassCircle px-32 py-32 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="line-one -mt-[200px]">
          <div class=" h-[430px] xl:h-52 rounded-3xl mx-auto mt-7">
            <div class="flex-row md:flex lg:flex-row xl:flex xl:justify-center xl:gap-28 grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <FacebookCompany />
              </div>

              <div class="flex items-center justify-center col-span-1 md:col-span-2 mt-5 lg:mt-0 xl:mt-0 lg:col-span-1">
                <DigitalOcean />
              </div>

              <div class="flex items-center justify-center col-span-1 md:col-span-2 mt-5 lg:mt-0 xl:mt-0 lg:col-span-1">
                <AmazonCompany />
              </div>

              <div class="flex items-center justify-center col-span-1 md:col-span-3 mt-8 lg:mt-0 xl:mt-0 lg:col-span-1">
                <TeslaCompany />
              </div>

              <div class="flex items-center justify-center col-span-2 md:col-span-3 mt-8 lg:mt-0 xl:mt-0 lg:col-span-1">
                <AdobeCompany />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trusted;
