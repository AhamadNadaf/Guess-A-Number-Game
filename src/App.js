import logo from './logo.svg';
import './App.css';
import GuessNumber from './components/guess-number';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
    <GuessNumber />  
    </div>
  );
}

export default App;
