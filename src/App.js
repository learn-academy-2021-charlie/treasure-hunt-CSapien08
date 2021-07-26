import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5
    }
  }
  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    while(bomb === treasure)
    {
      bomb = Math.floor(Math.random() * this.state.board.length)
    }
    this.setState({treasureLocation: treasure, bombLocation: bomb})
  }

  handleGamePlay = (index) => {
    const {board} = this.state
    var {counter} = this.state

    if(index === this.state.treasureLocation){
        board[index] = '💰'
        this.setState({board: board})
    }
    else if(index === this.state.bombLocation){
        board[index] = '💣'
        this.setState({board: board})
    }
    else{
      counter--
      board[index] = '🌴'
      this.setState({board: board, counter: counter})
    }
    
    
  }

  render(){
    console.log(this.state.treasureLocation)
    console.log(this.state.bombLocation)
    console.log(this.state.counter)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id='gameboard'>
          {this.state.board.map((value, index) => {
            return <Square 
                      value={value}
                      key={index}
                      index={index}
                      handleGamePlay={this.handleGamePlay}
                  />
          })}
        </div>
        <div>Turn's Left: {this.state.counter}</div>
        
      </>
    )
  }
}
export default App
