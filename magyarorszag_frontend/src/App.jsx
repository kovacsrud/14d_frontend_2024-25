import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Jogallasok from './components/Jogallasok';
import Megyek from './components/Megyek';
import Telepulesek from './components/Telepulesek';
import { TelepulesProvider } from './contexts/TelepulesContext';
import { MegyeProvider } from './contexts/MegyeContext';
import { TipusProvider } from './contexts/TipusContext';
import TelepulesAdatok from './components/TelepulesAdatok';

function App() {


  return (

      <div className='bg-lime-100 h-screen'>
        <TelepulesProvider>
        <MegyeProvider>
        <TipusProvider>
            <BrowserRouter>
               <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/megyek' element={<Megyek />} />
                  <Route path='/telepulesek' element={<Telepulesek />} />
                  <Route path='/jogallasok' element={<Jogallasok />} />
                  <Route path='/telepulesadatok' element={<TelepulesAdatok />} />
               </Routes>
            </BrowserRouter> 
        </TipusProvider>
        </MegyeProvider>  
        </TelepulesProvider>     
      </div>
  )
}

export default App
