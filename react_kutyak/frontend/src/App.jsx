import Kutyafajtak from "./components/Kutyafajtak";
import Kutyanevek from "./components/Kutyanevek";
import Kutyak from "./components/Kutyak";
import Main from "./components/Main";
import Menu from "./components/Menu";
import KutyaForm from "./components/KutyaForm";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import {KutyaProvider} from "./context/KutyaContext";


function App() {


  return (

      <div>       
        <BrowserRouter>
        <KutyaProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/kutyak" element={<Kutyak />} />
            <Route path="/kutyanevek" element={<Kutyanevek />} />
            <Route path="/kutyafajtak" element={<Kutyafajtak />} />
            <Route path="/kutyaform" element={<KutyaForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          </KutyaProvider>
        </BrowserRouter>
      </div>
  )
}

export default App
