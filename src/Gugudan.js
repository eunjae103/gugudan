import React, { Component } from "react";

class Gugudan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
    };
  }
  onSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState({
        result: "값은" + this.state.value + "정답",
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: "",
      });
    } else {
      this.setState({
        result: "땡 다시입력해주세요",
        value: "",
      });
    }
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.first}곱하기 {this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default Gugudan;
