import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count:0}
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  // setStateが実行されると実はrenderが実行される
  // setStateが実行されるたびにそのコールバックが再度実行される。
  // なので状態を変えるときは必ずsetStateを使う事
  // それを使っていればその状態に関連するdomが自動的に再度描画される。
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
