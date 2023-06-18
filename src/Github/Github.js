import "./Github.css"
import Search from "./Search"
import Profile from "./Profile"
function Github(){
    return(
        <div className="main">
        <div className="upper">
            <div className="upper1">gitproject</div>
            {/* <div className="upperlower">  */}
                
                <div className="upperlower2">
                    <Search/>
                    </div>
            {/* </div> */}
        </div>
        <div className="middle">
            <div className="middle1">
            <div className="photo"><Profile/></div>
            <div className="name">name</div>
            <div className="details">details</div>
            </div>
            <div className="middle2">details</div>
    </div>
    <div className="lower">
        <div className="lower1">repo</div> 
    </div>
        
    </div>
    )
}

export default Github