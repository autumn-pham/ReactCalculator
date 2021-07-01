import React, { Component } from 'react';

class ClearButton extends Component {
    render() {
        return(
            <p className="col-auto">
               <button className="button" onClick={()=>this.props.handleClear(this.props.children)}>
                    {this.props.children}
               </button>
            </p>
        )
    }
}

export default ClearButton;
