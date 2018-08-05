import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {
    return (
      <div>
        this is home~<br/>
        当前计数：{this.state.count}<br/>
        <button onClick={this.handleClick}>自增</button>
      </div>
    )
  }
}
