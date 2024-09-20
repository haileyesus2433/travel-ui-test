import FlightSearch from "../ui/flight-search";


const Hero: React.FC = () => {


  
  return (
    <section className="mt-16 w-full max-w-5xl bottom-0">
      <div className="bg-white rounded-t-lg overflow-hidden">
        <div className="h-16 flex justify-around items-center">
          <div>
            <span className="bg-gray-100 p-2 text-black font-bold">
              Company Logo
            </span>
          </div>
          <div className="flex bg-green-50 ">
            <div className="flex font-bold items-center p-3 space-x-4 text-sm">
              <span className="text-green-600">Flight</span>
              <span className="text-gray-600">Stays</span>
              <span className="text-gray-600">Tours</span>
              <span className="text-gray-600">Help</span>
            </div>
            <span className="bg-green-800 text-center p-3 text-white ">
              My Account
            </span>
          </div>
        </div>
        <div className="relative h-64 md:h-96">
          <img
            src="/assets/hero.jpg"
            alt="A beautiful black women holding a camera"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
            <h2 className="text-2xl md:text-4xl font-bold ">Hello There,</h2>
            <p className="text-xl md:text-3xl font-semibold ">
              Explore the Unseen, Experience the Unforgettable
            </p>
            <FlightSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
