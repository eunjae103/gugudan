import React, { Component, useState, useRef } from "react";
// import { useState } from "react/cjs/react.production.min";

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div>
        {first}곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

// class Gugudan extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       first: Math.ceil(Math.random() * 9),
//       second: Math.ceil(Math.random() * 9),
//       value: "",
//       result: "",
//     };
//   }
// onSubmit = (e) => {
//   console.log(this.state);
//   e.preventDefault();
//   if (parseInt(this.state.value) === this.state.first * this.state.second) {
//     this.setState((prevState) => {
//       return {
//         result: "정답: " + prevState.value,
//         first: Math.ceil(Math.random() * 9),
//         second: Math.ceil(Math.random() * 9),
//         value: "",
//       };
//     });
//     this.input.focus();
//   } else {
//     this.setState({
//       result: "땡 다시입력해주세요",
//       value: "",
//     });
//     this.input.focus();
//   }
// };

// onSubmit = (e) => {
//   e.preventDefault();
//   if (parseInt(this.state.value) === this.state.first * this.state.second) {
//     this.setState({
//       result: "정답",
//       first: Math.ceil(Math.random() * 9),
//       second: Math.ceil(Math.random() * 9),
//       value: "",
//     });
//     this.input.focus();
//   } else {
//     this.setState({
//       result: "땡 다시입력해주세요",
//       value: "",
//     });
//     this.input.focus();
//   }
// };

// onChange = (e) => {
//   this.setState({ value: e.target.value });
// };
// input;
// render() {
//   return (
//     <div>
//       <div>
//         {this.state.first}곱하기 {this.state.second}는?
//       </div>
//       <form onSubmit={this.onSubmit}>
//         <input
//           ref={(c) => {
//             this.input = c;
//           }}
//           type="number"
//           value={this.state.value}
//           onChange={this.onChange}
//         />
//         <button>입력!</button>
//       </form>
//       <div>{this.state.result}</div>
//     </div>

// <div>
//   <div>
//     {this.state.first}곱하기 {this.state.second}는?
//   </div>
//   <form onSubmit={this.onSubmit}>
//     <input
//       ref={(c) => {
//         this.input = c;
//       }}
//       type="number"
//       value={this.state.value}
//       onChange={this.onChange}
//     />
//     <button>입력</button>
//   </form>
//   <div>{this.state.result}</div>
// </div>
//     );
//   }
// }

export default Gugudan;
