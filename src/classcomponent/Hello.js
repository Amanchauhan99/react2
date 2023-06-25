// /* eslint-disable react/no-direct-mutation-state */
import React from "react";

class Hello extends React.Component{

constructor (props){
    super(props);
    this.state={
        count:0,
        likes:0,
        email:"amanjchauhan"
    }
}

componentDidMount(){
    setTimeout(()=>{
    this.setState(()=>{
        return{
            email:"aman"
        }
    })
},2000)
}

    render(){
    return(
        <div>
            Hello {this.props.name}
            <p>{this.state.count}</p>
            <p>{this.state.email}</p>
            <button onClick={(()=>{
                this.setState((previous)=>{
                    return{
                        count:previous.count+=1
                    }
                })
            })}>+1</button>
        </div>
    )
}
}

export default Hello

// class Hello extends React.Component {
//     componentDidMount() {
//       // Perform data fetching or other initialization tasks here
//       fetch('https://randomuser.me/api/?results=20')
//         .then(response => response.json())
//         .then(data => {
//           // Store the fetched data in component state
//           this.setState({ data: data });
//         });
//     }
  
//     render() {
//       // Render the component JSX here
//       return <div>{this.state.data}</div>;
//     }
//   }

//   export default Hello
  