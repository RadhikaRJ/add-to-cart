
import './App.css';
import Cart from './Components/Cart';
import Item from './Components/Item';
import {useState} from "react";
import { white } from 'ansi-colors';
import DisplayMode from './Components/DisplayMode';

function App() {


  const [ItemList,setItemList]=useState({
    item1:1,
    item2:1,
    item3:3
  })


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
      
    <DisplayMode mode={mode} setMode={setMode}/>
     
    <Cart totalItemCount={totalItemCount}/>

    <Item setTotalItemCount={setTotalItemCount} totalItemCount={totalItemCount} ItemList={ItemList} setItemList={setItemList} />

    <Item setTotalItemCount={setTotalItemCount} totalItemCount={totalItemCount}/>
    
    
    
    
    </div>

   
  );
}

export default App;
