import Hero from "./components/Hero";
import "./App.css";
import Tabs from "./components/Tabs";


const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
      <Hero />
      <Tabs />
      </div>
    </main>
  );
};

export default App;