import React from "react"

class Counter extends React.Component{

    constructor(){
        super()
        this.state={
            count : 0,
            textP : ''
        }
        // console.log(this)
        // console.log('Initialisation')
    }
    increment=()=> this.setState({count : this.state.count +1})
    decrement=()=> this.state.count >0 && this.setState({count : this.state.count -1})
    componentDidMount(){
        document.title = "HI"
        // console.log("Mount")
    }
    componentDidUpdate(){
        document.title = this.state.count
        // console.log("Update")
    }
    componentWillUnmount(){
        document.title = "Bye"
        // console.log("Unmount")
    }
    render(){
        // console.log("Render")
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <input type="text" onChange={(e)=> this.setState({textP : e.target.value})}/>
                <h3>{this.state.textP}</h3>
            </div>
        )
    }
}

export default Counter