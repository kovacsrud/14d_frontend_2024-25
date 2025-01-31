import Main from "./components/Main";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Login from "./components/Login";
import Vedett from "./components/Vedett";
import ImageUpload from "./components/ImageUpload";

import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import {UserProvider} from './context/UserContext';


function App() {


  return (

      <div>
        
        <UserProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vedett" element={<Vedett />} />
            <Route path="/imageupload" element={<ImageUpload />}/>
            <Route path="*" element={<Navigate to="/" />} />          
          </Routes>  
        </BrowserRouter>
        </UserProvider>

      </div>
  )
}

export default App
