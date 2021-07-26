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
      counter: 5,
      winOrLose: false,
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
    var {winOrLose} = this.state

    if(index === this.state.treasureLocation){
        board[index] = '💰'
        winOrLose = true
        this.setState({board: board, winOrLose: winOrLose})
        alert("Congratulations, you've found me tresure!")
    }
    else if(index === this.state.bombLocation){
        board[index] = '💣'
        winOrLose = true
        this.setState({board: board, winOrLose: winOrLose})
        alert("Shiver me timbers, you've found the bomb, better luck next time!")
    }
    else if(this.state.counter === 0){
        winOrLose = true
        this.setState({winOrLose: winOrLose})
        alert("HAHAHA, you've ran out of turns, better luck next time!")
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
                      counter={this.state.counter}
                      winOrLose={this.state.winOrLose}
                  />
          })}
        </div>
        <div>Turn's Left: {this.state.counter}</div>
        
      </>
    )
  }
}
export default App
