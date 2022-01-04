import './App.css';
import Data from './data.json';
import Home from './Home';
import Customerdata from './Customerdata';
import Transfer from './Transfer';
import { useState } from 'react';
function App() {
  const [UserData, setUserData] = useState(Data);
  return (
    <div className="App">
      <Home/>
      <Customerdata UserData={UserData} setUserData={setUserData} />
      <Transfer UserData={UserData} setUserData={setUserData}/>
    </div>
  );
}

export default App;
