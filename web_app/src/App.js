import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };
  // 불변성 유지를 위해 값을 변경해줘야함
  plusOne = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minusOne = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <div>현재값은 : {this.state.count}</div>;
        <button onClick={this.plusOne}>더하기</button>
        <button onClick={this.minusOne}>빼기</button>
      </div>
    );
  }
}

export default App;
