import React,{Component} from "react";

class Message extends Component
{
    constructor()
    {
        super();
        this.state={
            message:"Welcome visitor"
        }
    }
    changeState=()=>{
        this.setState({message:"Submitted"})
    }
   render()
   {
    return(
        <div>
           <h1>{this.state.message}</h1>
           <button type="submit" onClick={this.changeState}>Submit</button> 
        </div>
    )
   }
}

export default Message