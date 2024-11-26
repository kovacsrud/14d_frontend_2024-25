import {useContext} from 'react';
import TelepulesContext from '../contexts/TelepulesContext';
import Telepules from './Telepules';


function Telepulesek() {
    const {telepulesnevek}=useContext(TelepulesContext);
  return (
    <div className='bg-lime-100'>
        <h1 className='text-3xl text-lime-700 font-bold text-center'>Települések:</h1>
        <div className='grid grid-cols-4 justify-items-center'>
        {
            telepulesnevek.map((telepules,i)=>(<Telepules key={i} telepules={telepules.nev} />))
        }
        </div>
    </div>
  )
}

export default Telepulesek