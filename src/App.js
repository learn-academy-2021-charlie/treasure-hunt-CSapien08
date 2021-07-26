import React, { Component } from 'react'
import Square from './components/Square'
import Button from './components/Button'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5,
      gameState: false,
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
    var {gameState} = this.state

    if(index === this.state.treasureLocation){
        board[index] = '💰'
        gameState = true
        this.setState({board: board, gameState: gameState})
        alert("Congratulations, you've found me tresure!")
    }
    else if(index === this.state.bombLocation){
        board[index] = '💣'
        gameState = true
        this.setState({board: board, gameState: gameState})
        alert("Shiver me timbers, you've found the bomb, better luck next time!")
    }
    else if(this.state.counter === 0){
        gameState = true
        this.setState({gameState: gameState})
        alert("HAHAHA, you've ran out of turns, better luck next time!")
    }
    else{
      counter--
      board[index] = '🌴'
      this.setState({board: board, counter: counter})
    }
    
  }
  resetGame = () => {
      var board = ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
      var treasureLocation = null
      var bombLocation =  null
      var counter =  5
      var gameState =  false
      this.setState({board: board, treasureLocation: treasureLocation, bombLocation: bombLocation, counter: counter, gameState: gameState})
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
                      gameState={this.state.gameState}
                  />
          })}
        </div>
        <div>Turn's Left: {this.state.counter}</div>
        <div><Button resetGame={this.resetGame} /></div>
        
      </>
    )
  }
}
export default App
