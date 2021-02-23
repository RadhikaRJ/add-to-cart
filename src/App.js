
import './App.css';
import Cart from './Components/Cart';
import Item from './Components/Item';
import {useState} from "react";
import { white } from 'ansi-colors';

function App() {

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [mode,setMode] = useState(true);

  function setStyle(){
    if(mode){
      return({
        backgroundColor: "black",
        color:"white"
        
      })
    }
else return({
  backgroundColor:"white"
})

  }

  
  

  return (
    <div className="App" style={setStyle()} >
      

      <button onClick={()=>{setMode(!mode)}}>{mode?"Switch to light mode":"Switch to dark mode"}</button>
      <br></br>
    <Cart totalItemCount={totalItemCount}/>

    <Item setTotalItemCount={setTotalItemCount} totalItemCount={totalItemCount}/>
    <Item setTotalItemCount={setTotalItemCount} totalItemCount={totalItemCount}/>
    
    
    
    
    </div>

   
  );
}

export default App;
