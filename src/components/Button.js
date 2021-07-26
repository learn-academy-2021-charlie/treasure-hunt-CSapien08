import React, { Component } from 'react'


class Button extends Component{

    handleClick = () => {
        this.props.resetGame()
    }

    render(){
        return(
          <>
            <button id='button' onClick={this.handleClick}>
                Play Again?
            </button>
          </>
        )
    }
}
export default Button