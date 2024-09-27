import Header from "./components/Header";
import Counter from "./components/Counter";
import Lista from "./components/Lista";
import Posts from "./components/Posts";
import Thumbnails from "./components/Thumbnails";

function App() {
  

  return (
    
      <div className="container">
        <Header headerText="Frontend programozás React könyvtárral"/>
        <Counter start={20} />
        <Counter start={10} />
        {/*<Lista />
        <Posts />*/}
        <Thumbnails />

        

      </div>
      )
}

export default App
