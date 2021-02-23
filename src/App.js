
import './App.css';
import Cart from './Components/Cart';
import Item from './Components/Item';
import {useState} from "react";

function App() {

  const [totalItemCount, setTotalItemCount] = useState(0);



  return (
    <div className="App">
      
    <Cart totalItemCount={totalItemCount}/>
    <Item setTotalItemCount={setTotalItemCount} totalItemCount={totalItemCount}/>


    </div>
  );
}

export default App;
