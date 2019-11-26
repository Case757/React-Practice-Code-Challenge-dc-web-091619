import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eatenSushi: [],
    moneyLeft: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then( sushi => 
      this.setState({sushi: sushi})
    )}

    buttonHandler = () => {
      let sushiCopy = [...this.state.sushi]
      sushiCopy.splice(0, 4)
      this.setState({
        sushi: sushiCopy
      })
    }

    eatSushiHandler = (price) => {
      let eatenSushiCopy = [...this.state.eatenSushi]
      eatenSushiCopy.push("sushi")
      this.setState({eatenSushi: eatenSushiCopy})
      this.setState({moneyLeft: (this.state.moneyLeft - price)})
    }
    
    render() {
      return (
        <div className="app">
          <SushiContainer eatSushiHandler={this.eatSushiHandler} sushisInfo={this.state.sushi} moneyLeft={this.state.moneyLeft} buttonHandler={this.buttonHandler}/>
          <Table eatenSushi={this.state.eatenSushi} moneyLeft={this.state.moneyLeft}/>
        </div>
      );
    }
}


export default App;