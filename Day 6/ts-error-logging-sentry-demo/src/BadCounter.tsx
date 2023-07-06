import React from "react";

interface Props{
  hasError:false
}
class BadCounter extends React.Component {
  state = {
    counter: 0,
  };

  constructor(props:any) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  
  render() {
   
    if (this.state.counter === 2) {
        
      // Simulate a JS error
      throw new Error('I crashed!');
    }
  
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default BadCounter;