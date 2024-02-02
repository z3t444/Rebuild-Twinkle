import Card from "./content/Card.jsx";
import CirclePink from "./asset/CirclePink.jsx";
import IphoneImage from "./asset/iphone.png";

function ContentOne() {
  return (
    <>
      <div className="for-blurry-collor mt-80 blur-[100px]">
        <div className="flex">
          <div className="p-24 bg-purple-500 rounded-full"></div>
          <div className="p-24 bg-sky-400 rounded-full"></div>
        </div>
        <div className="flex">
          <div className="p-24 bg-red-500 rounded-full"></div>
          <div className="p-24 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
      <div className="relative container-content-one -mt-[500px] flex justify-between items-center">
        <div className="left flex">
          <div className="for-asset-iphone-frame">
            <img src={IphoneImage} alt="phone iphone" width={300} />
          </div>
          <div className="for-content-card mt-28 -ml-32">
            <Card></Card>
            <div className="ClassName ml-40 mt-2">
              <CirclePink></CirclePink>
            </div>
          </div>
        </div>
        <div className="right xl:w-2/4">
          <h3 className="text-5xl font-bold">3-year warranty boost</h3>
          <p className="mt-12 text-base leading-7 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi nesciunt et quod. Dolorum adipisci quis sint. Id natus laboriosam similique eos ad iusto, veniam rem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque molestias, est dicta tenetur cum quam?</p>
          <p className="text-base mt-5 leading-7 text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quas excepturi, perferendis ipsa autem vitae sit rerum laudantium temporibus! Illo laborum recusandae quod unde reprehenderit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, nostrum.</p>
        </div>
      </div>
    </>
  );
}

export default ContentOne;
