

function  Cart(props){

    return(
        <div>
        <p>Cart total items: {props.totalCartItemsCount}</p>
        <div>
            {
                props.itemsInCart.map((item)=>(

                     <div>{item.itemName}</div>
                ))
            }
        </div>
        
        </div>
    )
}
export default Cart;