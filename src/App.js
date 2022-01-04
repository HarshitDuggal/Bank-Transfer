import './App.css';
import Data from './data.json';
import Home from './Home';
import Customerdata from './Customerdata';
import Transfer from './Transfer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Customerdata/>
      <Transfer/>
    </div>
  );
}

export default App;
