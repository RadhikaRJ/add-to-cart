

function Item(props){

    return(
        <div>
            <div onClick={()=>{
            props.setTotalItemCount(props.totalItemCount+1);
        }}>
            Item1
        </div>
        <button 
        onClick={()=>{
            props.setTotalItemCount(props.totalItemCount+1);
        }}
        >Add</button><span> </span>
        <button
        onClick={()=>{
            props.setTotalItemCount(props.totalItemCount-1);
        }}
        >Remove</button>
        </div>
        
    )
}

export default Item;