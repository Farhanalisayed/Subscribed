// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  clicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  renderButton = () => {
    let {isClicked} = this.state
    if (isClicked) {
      return <button className="button" onClick={this.clicked}>Subscribed</button>
    } else {
      return <button className="button" onClick={this.clicked}>Subscribe</button>
    }
  }

  render() {
    let {isClicked} = this.state

    return (
      <div className="the-container">
        <h1 className="head">Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.renderButton}
        
      </div>
    )
  }
}
export default Welcome
