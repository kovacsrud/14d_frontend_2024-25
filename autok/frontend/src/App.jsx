import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import AutoLista from './components/AutoLista';
import Main from './components/Main';
import Menu from './components/Menu';
import Header from './components/Header';
import UjAuto from './components/UjAuto';

function App() {


  return (

      <div>
        <Header />
        <Router>
          
          <Menu />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/autolista' element={<AutoLista />} />
            <Route path='/ujauto' element={<UjAuto />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
        
      </div>
  )
}

export default App
