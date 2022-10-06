import React, {Component} from 'react';

class Welcome extends Component
{
   
    render()
    {
        const {name,country}=this.props
        return(
            <div>
                <h1>Welcome {name} to {country} </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome