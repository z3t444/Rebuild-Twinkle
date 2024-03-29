import "../Header/Header.css";

function Header() {
  return (
    <div className="Container-header flex items-center justify-between">
      {/* left */}
      <div className="left flex items-center gap-16">
        <div className="for-left-header gap-3 flex items-center">
          <h3 className="text-3xl tracking-tight font-semibold">Twinkle</h3>
          <div className="for-circle-logo flex items-center">
            <div className="red p-4 bg-red-600 rounded-full"></div>
            <div className="orange p-4 bg-orange-400 -ml-4 opacity-80 rounded-full"></div>
          </div>
        </div>
        <ul className="group=navigation text-lg flex items-center gap-8 text-gray-400 font-normal">
          <a href="#">Twinkles</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </ul>
      </div>
      {/* right */}
      <div className="right flex gap-4 text-lg items-center">
        <a className="font-medium" href="#">
          Personal
        </a>
        <li className="text-gray-500">
          <a href="#">Business</a>
        </li>
        <button className="px-5 py-3 hover:scale-95 duration-300 border rounded-xl ml-5 border-gray-400">
          <a className="font-medium" href="#">
            Get App
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
