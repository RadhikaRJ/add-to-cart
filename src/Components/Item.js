

function Item(props){


    function updateCart(){
        props.setTotalItemCount(()=>{
            const total =Object.values(props.ItemList).reduce((sum,number)=> sum+number)
            console.log(total);
            return total;
        });
    }

    return(
        <div>
            <div onClick={()=>{
                
            updateCart();

           
        }}>
            Item
        </div>
        <button 
        onClick={()=>{
            
            updateCart();
        }}
        >+</button><span> </span>
        <button
        onClick={()=>{
            // props.setTotalItemCount(()=>{
            //     var totalCount= (props.totalItemCount==0) ? 0 :props.totalItemCount-1;
            //     return totalCount;
            //     });
            updateCart();
           
        }}
        >-</button><span> Qty: {} </span>
        </div>
        
    )
}

export default Item;