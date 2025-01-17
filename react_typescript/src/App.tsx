
import './App.css'
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Section from './components/Section';
import Typicode from './components/Typicode';
import RandomUser from './components/RandomUser';


function App() {
  

  return (
    <div>
      <Header headerText="Header" id={4} />
      <SubHeader>Alcím <p>Ismertető_1</p><p>Ismertető_2</p></SubHeader>
      <Section title='Általános iskola'>
        <h3>Tanulók</h3>
        <p>Kovács Egon 8/a osztály</p>
      </Section>

      <Section>
        <h2>Dolgozók</h2>
        <p>Urbán Elek udvaros</p>
      </Section>
      <RandomUser />
       
    </div>
  )
}

export default App
