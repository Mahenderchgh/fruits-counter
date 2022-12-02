// Write your code here
import {Component} from 'react'

import './index.css'

class FruitCounter extends Component {
  state = {mangoesCount: 0, bananaCount: 0}

  onClickBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onClickMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state
    return (
      <div className="fruits-app-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="span-text"> {mangoesCount}</span> mangoes
            <span className="span-text"> {bananaCount}</span> bananas
          </h1>
          <div className="counter-control-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
