import travel_times_hero from "@assets/images/travel_times_hero.jpg";

const Hero = () => {
  console.log(travel_times_hero);
  return (
    <div
      style={{
        backgroundImage: `url(${travel_times_hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="header flex justify-between items-center px-6 py-4 text-white absolute top-0 w-full bg-blue-600 bg-opacity-60 z-30">
        <div className="header_logo text-2xl font-bold">
          <h2>TRAVEL TIMES</h2>
        </div>
        <nav className="header_nav">
          <ul className="flex gap-4 text-lg font-medium">
            <li>
              <a href="#home" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-black">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center h-full relative">
        <div className="absolute inset-0 bg-gray-600 opacity-70 z-10"></div>
        <h1 className="text-white text-4xl font-bold mb-4 z-20">
          Welcome to Travel Times
        </h1>
        <p className="text-white text-lg mb-8 z-20">Your journey starts here</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded z-20 cursor-pointer hover:bg-blue-800 hover:text-black transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
