import {Link,useNavigate} from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';


function Menu() {
    const navigate=useNavigate();
    const {logout,isAuthenticated}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');
    


  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" aria-label="Home">
            <img
              src="https://www.svgrepo.com/show/491978/gas-costs.svg"
              height="40"
              width="40"
            />
          </Link>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10">

        { (!token || !isAuthenticated) && (
            <div>
            <Link to="/register" className="m-5 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Regisztráció
            </Link>
          <Link to="/login" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Belépés
          </Link>
          </div>

        )}

        { (token || isAuthenticated) && (
            <div>
            <Link to="/vedett" className="m-5 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Védett infó
            </Link>
            <Link to="/imageupload" className="m-5 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Képek feltöltése
            </Link>
            <a onClick={()=>{logout('usertoken');navigate('/')}}  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Kilépés
            </a>
          </div>

        )}

        
        
      </div>
      
    </nav>
  );
}

export default Menu;
