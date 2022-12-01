import './App.css';
import Banner from './components/Banner';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import GenerateButton from './components/GenerateButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner/> 
        <div className='flexbox-container'>
          <InputBox/> 
          <GenerateButton />
          <OutputBox/>
        </div>
      </header>
    </div>
  );
}

export default App;
