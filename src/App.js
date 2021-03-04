
import './App.css';

import {useState} from "react";

import DisplayMode from './Components/DisplayMode';
import DisplayProducts from './Components/DisplayProducts';
import Cart from './Components/Cart';


function App() {


  const itemListData=[
    
    {
      itemName: "item1",
      itemUnitPrice: 10,
      itemQtyInCart:0,
      itemQtyAvailable:1
    },
    {
      itemName: "item2",
      itemUnitPrice: 20,
      itemQtyInCart:0,
      itemQtyAvailable:0
    },
    {
      itemName: "item3",
      itemUnitPrice: 30,
      itemQtyInCart:0,
      itemQtyAvailable:1
    }
  ]

  
  const [mode,setMode] = useState(true);
  
  const[totalCartItemsCount,setTotalCartItemsCount]=useState(0);
  const [itemsInCart,setItemsInCart]=useState([ ])

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
    
    <DisplayProducts itemListData={itemListData} setTotalCartItemsCount={setTotalCartItemsCount} totalCartItemsCount={totalCartItemsCount} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
    
    <Cart totalCartItemsCount={totalCartItemsCount} setTotalCartItemsCount={setTotalCartItemsCount} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
   
    
    </div>

   
  );
}

export default App;
