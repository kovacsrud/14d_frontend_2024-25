import Main from "./components/Main";
import Menu from "./components/Menu";
import Kereso from "./components/Kereso";
import { KeresoProvider } from "./context/KeresoContext";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {


  return (

      <div>
        <KeresoProvider>
        <BrowserRouter>
          <Menu />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/kereso" element={<Kereso />}/>          
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>                  
        </BrowserRouter>
        </KeresoProvider>
        
        
        
      </div>
  )
}

export default App
