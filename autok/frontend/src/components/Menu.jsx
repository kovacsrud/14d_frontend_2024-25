import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="navbar bg-teal-500">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-teal-100 text-xl">Főoldal</Link>
      </div>
      <div className="flex-none">
        <ul className="text-teal-100 menu menu-horizontal px-1">
          <li>
            <Link to="/autolista" >Autók listája</Link>
          </li>          
          <li>
            <Link to="/ujauto">Új autó felvitele</Link>
          </li>          
        </ul>
      </div>
    </div>
  );
}

export default Menu;
