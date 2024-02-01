function BlurryBackground() {
  return (
    <>
      <div className="flex index-for-blurry blur-[150px] mr-20 rotate-12 justify-end">
        <div>
          <div className="flex">
            <div className="circle p-40 bg-yellow-400 rounded-full"></div>
            <div className="circle p-40 bg-pink-600 rounded-full"></div>
          </div>
          <div className="flex">
            <div className="circle p-40 bg-blue-500 rounded-full"></div>
            <div className="circle p-40 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlurryBackground;
