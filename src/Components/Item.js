

function Item(props){

    return(
        <div>
            <div onClick={()=>{
            props.setTotalItemCount(props.totalItemCount+1);
        }}>
            Item
        </div>
        <button 
        onClick={()=>{
            props.setTotalItemCount(props.totalItemCount+1);
        }}
        >+</button><span> </span>
        <button
        onClick={()=>{
            props.setTotalItemCount(()=>{
                var totalCount= (props.totalItemCount==0) ? 0 :props.totalItemCount-1;
                return totalCount;
                });
        }}
        >-</button>
        </div>
        
    )
}

export default Item;