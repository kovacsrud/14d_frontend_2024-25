import {Link,useNavigate} from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';


function Menu() {
    const navigate=useNavigate();
    const {logout}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');
    


  return (
    <nav class="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
      <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <Link to="/" aria-label="Home">
            <img
              src="https://www.svgrepo.com/show/491978/gas-costs.svg"
              height="40"
              width="40"
            />
          </Link>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:flex md:space-x-10">

        { !token && (
            <div>
            <Link to="/register" class="m-5 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Regisztráció
            </Link>
          <Link to="/login" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Belépés
          </Link>
          </div>

        )}

        { token && (
            <div>
            <Link to="/vedett" class="m-5 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Védett infó
            </Link>
            <a onClick={()=>{logout('usertoken');navigate('/')}}  class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
            Kilépés
            </a>
          </div>

        )}

        
        
      </div>
      
    </nav>
  );
}

export default Menu;
