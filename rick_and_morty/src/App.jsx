import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import Main from "./components/Main";
import Menu from "./components/Menu";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';


function App() {


  return (

      <div>
        <BrowserRouter basename="/rickandmorty">
          <Menu />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/locations" element={<Locations />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
