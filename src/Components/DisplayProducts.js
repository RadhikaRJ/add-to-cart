
import { useState } from "react";

function DisplayProducts(props){
 
   
    function greyOnNotAvailable(i){
        if(i==0){
            console.log("this is executed"+props.itemListData.itemQtyAvailable)
            return(
               { disabled:"true",
                pointerEvents:"none",
               
                backgroundColor:"lightgray"
               })
        }
        else return({});
    }

    return(
        <div>
        {
            props.itemListData.map((item)=>(
                <div style={greyOnNotAvailable(item.itemQtyAvailable)}>
                <div onDoubleClick={()=>{
                    props.setTotalCartItemsCount(props.totalCartItemsCount+1)
                    
                    props.setItemsInCart(()=>{
                        
                        const updatedItemList=props.itemsInCart.concat(item)
                        return updatedItemList;
                    })
                    }}>{item.itemName}</div>
                <span>Price: {item.itemUnitPrice}</span><br></br>
                <span>Stock Availability: {item.itemQtyAvailable}</span>
                 <br></br>
                <button 
                onClick={()=>{
                    props.setTotalCartItemsCount(props.totalCartItemsCount+1)
                    
                    props.setItemsInCart(()=>{
                        
                        const updatedItemList=props.itemsInCart.concat(item)
                        return updatedItemList;
                    })
                    }}>Add to Cart</button>
                <br></br><br></br>
                </div>
            ))
        }   
      
         
       
    
        </div>
    )
}

export default DisplayProducts;