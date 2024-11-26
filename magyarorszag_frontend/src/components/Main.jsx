import {Link} from "react-router-dom";

function Main() {
  return (
    <div className="bg-lime-100 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl py-20 xl:max-w-6xl">
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img
          className="h-full w-full object-cover"
          src="https://lh6.googleusercontent.com/proxy/vI65Ozw2mjEQcZjmZrbW6VbO67iLNhX6qN-qnoKukT-Jf_4GyppFLmZYQykOqhMIKVEW9F-i9Ngw9_h8cnt1_8jfgTZuZ9Xws3bn63T4P5BRjuoHA4Q"
          alt="magyarorszag"
        />
      </div>

      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
            Magyarország települései
          </h2>
          <p className="mt-4">
            Magyarország települései, települések, megyék illetve jogállás szerint.
          </p>

          <div className="mt-8">
            <Link to="/telepulesek"              
              className="block m-5 w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
            >
              Települések
            </Link>
            <Link to="/megyek"
              
              className="block m-5 w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
            >
              Megyék
            </Link>
            <Link to="/jogallasok"
              
              className="block m-5 w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
            >
              Jogállás
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
