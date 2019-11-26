import React, { Fragment } from 'react'

class Sushi extends React.Component{

  state = {toggle: false}
  clickHandler = event => {
    if (this.props.moneyLeft > this.props.sushiInfo.price) {
    this.setState({toggle: !this.state.toggle})
    this.props.eatSushiHandler(this.props.sushiInfo.price)}
    else {
      console.warn("You don't have enough money!")
    }
  }
  render() {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.clickHandler}>
        { 
          this.state.toggle === true ? 
            null
          :
            <img src={this.props.sushiInfo.img_url} alt="sushi" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushiInfo.name} - ${this.props.sushiInfo.price}
      </h4>
    </div>
  )}
}

export default Sushi