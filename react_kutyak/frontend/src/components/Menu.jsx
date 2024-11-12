import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <header className="sticky inset-0 z-50 border-b border-slate-100 bg-blue-200/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
          <div className="relative flex items-center">
            <a href="/">
              <img
                src="https://www.svgrepo.com/show/6195/bear.svg"
                loading="lazy"
                style={{ color: "transparent" }}
                width="32"
                height="32"
              />
            </a>
          </div>
          <ul className="hidden items-center justify-center gap-6 md:flex">
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <Link to="/kutyanevek">Kutyanevek</Link>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <Link to="/kutyafajtak">Kutyafajták</Link>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <Link to="/kutyak">Rendelési adatok</Link>
            </li>
          </ul>
          <div className="flex-grow"></div>
          <div className="hidden items-center justify-center gap-6 md:flex">
            <Link to="/" className="font-dm text-sm font-medium text-slate-700">
              Főoldal
            </Link>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-auto text-slate-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Menu;
