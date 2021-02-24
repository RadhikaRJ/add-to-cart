

function DisplayMode(props){


    return(
        <button
        onClick={()=>{
            props.setMode(!props.mode)
        }}
        
        >{props.mode?"Switch to Ligh Mode":"Switch to Dark Mode"}</button>
    )
}
export default DisplayMode;