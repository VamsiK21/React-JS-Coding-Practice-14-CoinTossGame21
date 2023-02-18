// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headCount: 0,
    tailCount: 0,
    resultImgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onChangeTossImage = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        resultImgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
        resultImgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headCount, tailCount, resultImgUrl} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>

          <img className="image" src={resultImgUrl} alt="toss result" />
          <button
            onClick={this.onChangeTossImage}
            className="toss-btn"
            type="button"
          >
            Toss Coin
          </button>

          <div className="results-container">
            <p className="total-btn" type="button">
              Total: {totalCount}
            </p>
            <p className="total-btn" type="button">
              Heads: {headCount}
            </p>
            <p className="total-btn" type="button">
              Tails: {tailCount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
