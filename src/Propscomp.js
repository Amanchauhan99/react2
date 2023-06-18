/* eslint-disable jsx-a11y/alt-text */
function Propscomp(props){
    const card={
        backgroundColor:"white",
        color: "black",
        height:"600px",
        width: "300px",
        padding:'30px',
        margin:"30px",
        boxShadow: "0 0 10px black",
        // display:"flex"
        // align-items:"center",
    }
    // const d={
        
    //     backgroundColor:"black",
    //     display:"flex",
    //     // height:"500px",
    //     // width:"500px"
    //     // align-items:"center",
    //     // justify-content:"center"
    // }
return(
    // <div style={d}>
    <div style={card} >
            <img src={ props.img} width="100%" height="300px" /> 
             <h6>{ props.id}</h6>
            <h2>{ props.name[0]} </h2>
            <p>Is Available for Joining : { props.isCapable?"YES":"NO"}</p>
            <h3>{ props.gender}</h3>

            <h4>{ props.description}</h4>
            <button onClick={ props.fn} >Profile</button>
        </div>
        // </div>
)
}

export default Propscomp;