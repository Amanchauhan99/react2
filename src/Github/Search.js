import "./Github.css"

function Search(){

    return(
        <div>
        <div style={{display:"flex",height: "100%",width: "610px"}} >
            <input  className="upperlower1" type="text" placeholder="Search" />
        <button>Search</button>
        </div>
        </div>
    )
}

export default Search