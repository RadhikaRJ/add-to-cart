
import { useState } from "react";

function DisplayProducts(props){
 
   
    return(
        <div>
        {
            props.itemListData.map((item)=>(
                <div>
                <div onClick={()=>{
                    props.setTotalCartItemsCount(props.totalCartItemsCount+1)
                    
                    props.setItemsInCart(()=>{
                        
                        const updatedItemList=props.itemsInCart.concat(item)
                        return updatedItemList;
                    })
                    }}>{item.itemName}</div>
                <span>Price: {item.itemUnitPrice}</span>
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