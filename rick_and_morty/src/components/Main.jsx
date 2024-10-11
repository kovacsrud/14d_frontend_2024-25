import Rick from "../assets/rick.jpeg";
import Morty from "../assets/morty.png";


function Main() {
  return (
    <div className="hero bg-sky-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Rick}
          className="max-w-sm rounded-full shadow-2xl"
        />
        <img
          src={Morty}
          className="max-w-sm rounded-full shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Rick and Morty App</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Main;
